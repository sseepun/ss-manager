import { 
  Component, OnInit, OnDestroy, ElementRef, HostListener, ViewChild
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SocketioService } from '../../services/socketio.service';
import { UserService } from '../../services/user.service';
import { FormService } from '../../services/form.service';
import { FileuploadService } from '../../services/fileupload.service';
import { TranslationService } from '../../services/translation.service';

import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PDFAnnotationData } from 'pdfjs-dist';
import { FormControl } from '@angular/forms';
import * as d3 from 'd3';

declare var $: any;
declare const jsPDF: any;
import * as html2canvas from 'html2canvas';

import { User } from '../../schemas/user';
import { SSForm } from '../../schemas/ss-form';
import { SubmittedForm } from '../../schemas/submitted-form';
import { FormInput } from '../../schemas/form-input';

@Component({
  selector: 'app-ss-pdf-form',
  templateUrl: './ss-pdf-form.component.html',
  styleUrls: ['./ss-pdf-form.component.css']
})
export class SsPdfFormComponent implements OnInit, OnDestroy {

  private bypass = false;  
  public accessCode = null;
  private routerSubscription;
  public userDetail = null;

  public form: SSForm = null;
  public inputList: FormInput[] = [];
  private inputNames: Array<string> = [];

  private signatureNames: Array<string> = [];
  private signatures = {};

  public loadForm: SubmittedForm = null;
  private checkboxValue = {};

  readonly dpiRatio = 96 / 72;  
  private pdfSize;
  private pageHeight;
  private marginLeft = 0;
  private pageNumber = 1;

  private evidences = [];
  private editEvidences = null;

  private host;
  private processing = false;
  public page = 'Form';
  public saving = false;
  public deleting = false;

  // Admin
  public approving = false;
  public notApproving = false;
  public adminDeleting = false;

  @ViewChild('content') content: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private _router: ActivatedRoute,
    private _socketio: SocketioService,
    public _user: UserService,
    public _form: FormService,
    private _fileupload: FileuploadService,
    public _t: TranslationService
  ) { }

  @HostListener('window:resize') formScale() {
    let elem1 = this.host.select('.ss-pdf-content').node(),
        elem2 = this.host.select('.page').node();
    let left = (elem1.getBoundingClientRect().width - elem2.getBoundingClientRect().width) / 2;
    left = Math.max(0, left);

    this.marginLeft = left;
    if (window.innerWidth<=991) this.marginLeft += 15;
  }

  ngOnInit() {
    this.host = d3.select(this.elementRef.nativeElement);
    d3.select('body').classed('grey-body', true);
  
    // Load form
    this.loadForm = Object.assign({}, this._form.getSubmittedForm) as SubmittedForm;
    this.routerSubscription = this._router.params.subscribe(params=>{
      if (params.accessCode!==undefined) {
        this.accessCode = params.accessCode;

        this._form.getFormDetail(this.accessCode)
          .then(result => {
            if (result.status) this.form = result.data as SSForm;
            console.log(this.form);
          });

        if (this._form.getRole==='User' || this.loadForm===null) {
          let user = Object.assign({}, this._user.getUser()) as User;
          this._user.getUserDetail(user)
            .then(result => {if (result.status) this.userDetail = result.data});
        } else {
          this._user.getUserDetailById(this.loadForm.userId)
            .then(result => {if (result.status) this.userDetail = result.data});
        }
      }
    });

    // Socket.io
    this._socketio.getSocket().on('announce-form-user-status', function (form: SubmittedForm) {
      if (this.yourSubmitted(form._id)) this.page = 'Status change';
    }.bind(this));
    this._socketio.getSocket().on('announce-form-deleted', function (form: SubmittedForm) {
      if (this.yourSubmitted(form._id)) this.page = 'Form deleted';
    }.bind(this));
    this._socketio.getSocket().on('announce-main-form-deleted', function (form: SSForm) {
      if (this.form!==null && this.form._id===form._id) this.page = 'Main form deleted';
    }.bind(this));
  }
  yourSubmitted(formId) {
    if (this.loadForm!==null && this.loadForm._id===formId && !this.bypass) return true;
    else return false;
  }

  public pdfLoadComplete(pdf: PDFDocumentProxy) {
    $('.loader').delay(600).fadeOut('slow');
    
    d3.timeout(()=>{
      this.pdfSize = this.host.select('.page').node().getBoundingClientRect();
      this.pageHeight = this.pdfSize.height + 10;
      this.pageNumber = pdf.numPages;
      this.formScale();
      this.profileAdjustment(0);

      for (let i = 1; i<=pdf.numPages; i++) {
        let currentPage = null;
        pdf.getPage(i)
          .then(p => {
            currentPage = p;
            return p.getAnnotations();
          })
          .then(ann => {
            const annotations = (<any>ann) as PDFAnnotationData[];
            annotations
              .filter(a=>a.subtype==='Widget')
              .forEach(a=>{
                const fieldRect = currentPage.getViewport(this.dpiRatio)
                  .convertToViewportRectangle(a.rect);
                this.addFormInput(a, fieldRect, i);
              });
          });
      }
    }, 200);
  }
  addFormInput(annotation, rect: number[] = null, page=0) {
    let formControl = new FormControl(annotation.buttonValue || '');

    const input = new FormInput();
    input.name = annotation.fieldName.replace(/ /g, '-');
    input.name = input.name.replace(/\./g, '-');
    input.name = input.name.replace(/--/g, '-');
    let name = input.name,
        i = 0;
    while (this.inputNames.indexOf(name)>-1) {
      i += 1;
      name = input.name + i;
    }
    input.name = name;
    this.inputNames.push(input.name);

    if (annotation.fieldType==='Tx') {
      input.type = 'text';
      input.value = annotation.buttonValue || '';
    } else {
      input.type = 'checkbox';
      input.value = '';
    }

    if (rect) {
      input.top = rect[1] - (rect[1] - rect[3]) + (this.pageHeight * (page - 1));
      input.left = rect[0];
      input.height = (rect[1] - rect[3]);
      input.width = (rect[2] - rect[0]);
      input.textAlignment = Number(annotation.textAlignment);
    }

    this.inputList.push(input);
  }
  profileAdjustment(i=0) {
    i += 1;
    let profile = this.host.select('.ss-profile');
    if (profile.node()===null && i<10) {
      d3.timeout(()=>{this.profileAdjustment(i)}, 200);
    } else {
      let profileSize = profile.node().getBoundingClientRect(),
          image = profile.select('img'),
          imageSize = image.node().getBoundingClientRect();
      image.style('top', ((profileSize.height - imageSize.height)/2)+'px');
    }
  }
  public adminViewMode() {
    if (this.loadForm!==null) {
      if (this.loadForm.status!=='Approved' && this.loadForm.status!=='Not approved') return 'admin-view-mode1';
      else return 'admin-view-mode2';
    } else return '';
  }

  // General input process
  get pdfPath() {return '../public/forms/' + this.form.pdfForm}
  public inputPosition(formInput: FormInput) {
    let fontSize = 16;
    let style = {
      top: formInput.top+'px', 
      left: (this.marginLeft + formInput.left)+'px',
      height: formInput.height+'px', 
      width: formInput.width+'px',
      'font-size': fontSize+'px'
    };
    if (formInput.textAlignment==1) style['text-align'] = 'center';
    else if (formInput.textAlignment==2) style['text-align'] = 'right';

    return style;
  }
  public checkboxChange(event, name) {this.checkboxValue[name] = event.currentTarget.checked}
  public default(value) {return value===undefined ? '' : value}
  public submitSignature(signature, name) {this.signatures[name] = signature}  

  // Special inputs
  public inputSpecial(name) {return name.startsWith('ss-')}
  public inputAdmin(name) {return name.indexOf('-admin')>-1 ? true : false}
  public inputRequired(name) {return name.indexOf('-required')>-1 ? true : false}
  public inputSignature(name) {return name.indexOf('ss-signature')>-1 ? true : false}
  public inputProfileImg(name) {return name.indexOf('ss-profile-img')>-1 ? true : false}
  public inputFullname(name) {return name.indexOf('ss-fullname')>-1 ? true : false}

  // Predefined values
  get userProfileImage() {
    if (this.userDetail!==null) {
      if (this.userDetail.profileUrl===undefined || this.userDetail.profileUrl===null || this.userDetail.profileUrl==='')
        return 'assets/img/profile/default.jpg';
      else return '../public/profile/' + this.userDetail.profileUrl;
    } else return 'assets/img/profile/default.jpg';
  }
  get userFullname() {
    return this.userDetail!==null ? this.userDetail.firstname+' '+this.userDetail.lastname : '';
  }

  // Form actions
  public submitForm(form: NgForm) {
    if (!this.processing) {
      this.processing = true;
      let values = {...form.value, ...this.checkboxValue, ...this.signatures};

      if (this.evidences.length>0) {
        let evidenceForm: any = new FormData();
        for (let i=0; i<this.evidences.length; i++) {
          let evidence = this.evidences[i];
          evidenceForm.append('evidences', evidence.file, evidence.file['name']);
        }
        this._fileupload.uploadFormEvidences(evidenceForm, this.evidences.length).then(result1=>{
          if (result1.status) {
            let evidences = [];
            for (let i=0; i<this.evidences.length; i++) {
              evidences.push({name: this.evidences[i].name, file: result1.data[i]});
            }
            this._form.submitForm(this.userDetail.userId, this.form._id, values, evidences)
              .then(result=>{
                this._form.formSubmitted.emit(result);
                this.processing = false;
                if (result.status) this.page = 'Submitted ok';
                else this.page = 'Submitted failed';
              });
          } else {
            this.processing = false;
            this.page = 'Submitted failed';
          }
        });
      } else {
        this._form.submitForm(this.userDetail.userId, this.form._id, values)
          .then(result=>{
            this._form.formSubmitted.emit(result);
            this.processing = false;
            if (result.status) this.page = 'Submitted ok';
            else this.page = 'Submitted failed';
          });
      }
    }
  }
  public editSubmittedForm(form: NgForm) {
    if (!this.processing) {
      this.processing = true;
      let checkbox = {};
      Object.keys(this.loadForm.formValue).map(key=>{
        if (this.loadForm.formValue[key]==true) checkbox[key] = true;
      });
      let values = {...this.loadForm.formValue, ...form.value, ...checkbox, ...this.checkboxValue, ...this.signatures};      
      
      if (this.editEvidences!==null && this._form.getRole!=='Admin') {
        if (this.editEvidences.oldDeleteEvidences.length>0) {
          this._fileupload.removeFormEvidences(this.editEvidences.oldDeleteEvidences);
        }
        
        if (this.editEvidences.newEvidences.length>0) {
          let evidenceForm: any = new FormData();
          for (let i=0; i<this.editEvidences.newEvidences.length; i++) {
            let evidence = this.editEvidences.newEvidences[i];
            evidenceForm.append('evidences', evidence.file, evidence.file['name']);
          }

          this._fileupload.uploadFormEvidences(evidenceForm, this.editEvidences.newEvidences.length)
            .then(result1=>{
              if (result1.status) {
                let evidences = this.editEvidences.oldEvidences;
                for (let i=0; i<this.editEvidences.newEvidences.length; i++) {
                  evidences.push({
                    name: this.editEvidences.newEvidences[i].name, 
                    file: result1.data[i]
                  });
                }
                this.userEditSubmittedForm(values, evidences);
              } else {
                this.processing = false;
                this.page = 'Edited failed';
              }
            });
        } else this.userEditSubmittedForm(values, this.editEvidences.oldEvidences);
      } else {
        if (this._form.getRole !== 'Admin') this.userEditSubmittedForm(values);
        else this.adminEditSubmittedForm(values);
      }
    }
  }
  userEditSubmittedForm(values, evidences=undefined) {
    if (evidences===undefined) {
      this._form.editSubmittedForm(this._form.getSubmittedForm._id, values).then(result => {
        this.processing = false;
        if (result.status) this.page = 'Edited ok';
        else this.page = 'Edited failed';
      });
    } else {
      this._form.editSubmittedForm(this._form.getSubmittedForm._id, values, evidences).then(result => {
        this.processing = false;
        if (result.status) this.page = 'Edited ok';
        else this.page = 'Edited failed';
      });
    }
  }
  adminEditSubmittedForm(values) {
    this._form.editSubmittedForm(this._form.getSubmittedForm._id, values).then(result => {
      if (result.status) {
        this.loadForm.formValue = values;
        this.processing = false;
        this.adminSetSubmittedFormStatus('Approved');
      } else {
        this.bypass = true;
        this.processing = false;
        this.page = 'Admin edited failed';
      }
    });
  }
  public userDeleteSubmittedForm() {
    if (this.loadForm!==null && !this.processing) {
      this.processing = true;
      this._form.deleteSubmittedForm(this._user.getUser()._id, this.loadForm).then(result => {
        this.processing = false;
        if (result.status) this.page = 'Deleted ok';
        else this.page = 'Deleted failed';
        this.loadForm = null;
        this.deleting = false;
      });
    }
  }
  public adminDeleteSubmittedForm() {
    if (!this.processing) {
      this.processing = true;
      if (this._user.getUser().level >= 7) {
        this.bypass = true;
        this._form.deleteSubmittedForm(this.loadForm.userId, this.loadForm).then(result => {
          this.processing = false;
          this.adminDeleting = false;
            
          if (result.status) this.page = 'Admin deleted ok';
          else this.page = 'Admin deleted failed';
        });
      } else {
        this._form.setMode();
        this.router.navigate(['/']);
      }
    }
  }
  public adminSetSubmittedFormStatus(status) {
    if (!this.processing) {
      this.processing = true;
      if (this._user.getUser().level >= 7) {
        this.bypass = true;        
        let approver = Object.assign({}, this._user.getUser()) as User;
        this._form.setSubmittedFormStatus(this.loadForm, status, approver).then(result => {
          this.processing = false;
          this.approving = false; this.notApproving = false;
            
          if (result.status) this.page = 'Admin set status ok';
          else this.page = 'Admin set status failed';
        });
      } else {
        this._form.setMode();
        this.router.navigate(['/']);
      }
    }
  }
  public downloadPDF() {
    if (!this.saving) {
      this.saving = true;
      let doc = new jsPDF('p', 'pt', 'a4'),
          pdfConf = {pagesplit: false, background: '#fff'};
      d3.selectAll('.ss-button-container').style('display', 'none');

      html2canvas(document.getElementById('ss-pdf-content')).then(canvasObj=>{
        document.getElementById('ss-pdf-content-holder').appendChild(canvasObj);
        let containerSize = this.host.select('#ss-pdf-content').node().getBoundingClientRect(),
            pdfSize = this.host.select('.page').node().getBoundingClientRect(),
            scale = [595 / pdfSize.width, 842 / pdfSize.height];
        
        doc.addImage(
          canvasObj, 
          (containerSize.x-pdfSize.x)*scale[0], 0, 
          containerSize.width*scale[0], containerSize.height*scale[1]
        );
        for (let i=1; i<this.pageNumber; i++) {
          doc.addPage();
          doc.addImage(
            canvasObj, 
            (containerSize.x-pdfSize.x)*scale[0], (-i*(10+pdfSize.height))*scale[1], 
            containerSize.width*scale[0], containerSize.height*scale[1]
          );
        }

        document.getElementById('ss-pdf-content-holder').removeChild(canvasObj);
        doc.save(this.form.nameTH+' - '+this.userDetail.firstname+' '+this.userDetail.lastname+'.pdf');

        this.host.select('.ss-dowloading').classed('inactive', true);
        setTimeout(()=>{
          this.saving = false;
          d3.selectAll('.ss-button-container').style('display', 'block');
        }, 600);
      });
    }
  }
  public adminRedirect(link) {
    if (this._user.getUser().level >= 7) {
      this.bypass = true;
      this.router.navigate([link]);
    } else {
      this._form.setMode();
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy() {
    d3.select('body').classed('grey-body', false);
    this.routerSubscription.unsubscribe();
    if (!this.bypass || this._form.getRole!=='Admin' 
    || (this._form.getMode!=='ViewByPass' && this._form.getMode!=='EditByPass')) this._form.setMode();

    // Unbind Socket.io
    this._socketio.getSocket().removeAllListeners('announce-form-user-status');
    this._socketio.getSocket().removeAllListeners('announce-form-deleted');
    this._socketio.getSocket().removeAllListeners('announce-main-form-deleted');
  }

}
