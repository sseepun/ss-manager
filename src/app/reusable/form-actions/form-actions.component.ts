import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormService } from '../../services/form.service';
import { FileuploadService } from '../../services/fileupload.service';
import { UserService } from '../../services/user.service';
import { TranslationService } from '../../services/translation.service';

import { SSForm } from '../../schemas/ss-form';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.css']
})
export class FormActionsComponent implements OnInit {

  @Input() type = 'View'; // View, Edit, Create
  @Input() form: SSForm = null;
  @Output() formCreated: EventEmitter<any> = new EventEmitter();
  @Output() formEdited: EventEmitter<any> = new EventEmitter();

  public processing = false;
  public formCategory = null;
  public files = {pdfForm: null, previewUrl: null};
  public pdfMissing = 0;
  public failed = 0;

  public previewDeleting = false;
  public previewDeleted = 0;
  public editFailed = 0;

  constructor(
    private _form: FormService,
    private _fileupload: FileuploadService,    
    private _user: UserService,
    public _t: TranslationService,
    private router: Router
  ) { }

  ngOnInit() {
    this._form.getFormCategory().then(result=>{
      if (result.status) this.formCategory = result.data;
    });
  }

  choosePdfForm(pdfForm: any) {
    this.files.pdfForm = <File>pdfForm.target.files[0];
  }
  choosePdfPreview(previewUrl: any) {
    this.files.previewUrl = <File>previewUrl.target.files[0];
  }

  public adminCreateForm(form: NgForm) {
    let user = Object.assign({}, this._user.getUser());
    
    if (!this.processing && user.level>=7 && this.files.pdfForm!==null) {
      this.processing = true;
      this.pdfMissing = 0;

      form.value.creatorId = user._id;
      form.value.status = 'Active';
      if (this._t.getLanguage==='TH') {
        let categoryEN = '';
        this.formCategory.map(d=>{if (d.categoryTH===form.value.category) categoryEN = d.categoryEN});
        form.value.category = [categoryEN];
      } else form.value.category = [form.value.category];
      form.value.requireEvidence = (form.value.requireEvidence==='Yes');
      
      let formFile: any = new FormData();
      formFile.append('pdfForm', this.files.pdfForm, this.files.pdfForm['name']);
      this._fileupload.uploadMainForm(formFile).then(result1=>{
        if (result1.status) {
          if (this.files.previewUrl===null) this.successfullyCreatedForm(form.value, {pdfForm: result1.data});
          else {
            let formPreviewFile: any = new FormData();
            formPreviewFile.append('previewUrl', this.files.previewUrl, this.files.previewUrl['name']);
            this._fileupload.uploadMainFormPreview(formPreviewFile).then(result2=>{
              if (result2.status) this.successfullyCreatedForm(form.value, {pdfForm: result1.data, previewUrl: result2.data});
              else this.failed = 1;
            });
          }
        } else this.failed = 1;
      });
    }
    else if (user.level<7) this.router.navigate(['/']);
    else if (this.files.pdfForm===null) this.pdfMissing = 1;
  }
  successfullyCreatedForm(formValue, formPath) {
    let form: SSForm = {...formValue, ...formPath};
    this._form.createForm(form).then(result=>{
      if (result.status) this.formCreated.emit(result);
      else this.failed = 1;
    });
  }
  public adminEditForm(form: NgForm) {
    let user = Object.assign({}, this._user.getUser());

    if (!this.processing && user.level>=7) {
      this.processing = true;

      form.value.creatorId = user._id;
      form.value.status = 'Active';
      if (this._t.getLanguage==='TH') {
        let categoryEN = '';
        this.formCategory.map(d=>{if (d.categoryTH===form.value.category) categoryEN = d.categoryEN});
        form.value.category = [categoryEN];
      } else form.value.category = [form.value.category];
      form.value.requireEvidence = (form.value.requireEvidence==='Yes');

      let editedForm: SSForm = {...this.form, ...form.value};
      if (this.files.previewUrl===null) {
        this._form.editForm(editedForm).then(result=>{
          if (result.status) this.formEdited.emit(result);
          else this.editFailed = 1;
        });
      } else {
        let formPreviewFile: any = new FormData();
        formPreviewFile.append('previewUrl', this.files.previewUrl, this.files.previewUrl['name']);

        this._fileupload.uploadMainFormPreview(formPreviewFile).then(result1=>{
          if (result1.status) {
            editedForm.previewUrl = result1.data;
            this._form.editForm(editedForm).then(result2=>{
              if (result2.status) this.formEdited.emit(result2);
              else this.editFailed = 1;
            });
          } else this.editFailed = 1;
        });
      }
    }
    else if (user.level<7) this.router.navigate(['/']);
  }

  public displayValue(value) {
    if (value===true) return 'Yes';
    else if (value===false) return 'No';
    else return (value===undefined || value===null || value==='') ? 'N/A' : value;
  }
  public displayFormCategory() {
    if (this.formCategory===null || this.form.category===undefined || this.form.category===null || this.form.category.length==0) return 'N/A';
    else {
      let categoryEN = this.form.category[0];
      if (categoryEN==='') return 'N/A';
      else if (this._t.getLanguage!=='TH') return categoryEN;
      else {
        let categoryTH = 'N/A';
        this.formCategory.map(d=>{if (d.categoryEN===categoryEN) categoryTH = d.categoryTH});
        return categoryTH;
      }
    }
  }
  public displayFormPreview() {
    if (this.form.previewUrl===undefined || this.form.previewUrl===null || this.form.previewUrl==='') {
      return 'assets/img/formPreview/default.jpg';
    } else return '../public/formPreview/'+this.form.previewUrl;
  }
  public defaultValue(value) {
    if (value===true) return 'Yes';
    else if (value===false) return 'No';
    else return (value===undefined || value===null) ? '' : value;
  }
  public defaultFormCategory() {
    if (this.formCategory===null || this.form.category===undefined || this.form.category===null || this.form.category.length==0) return '';
    else {
      let categoryEN = this.form.category[0];
      if (this._t.getLanguage!=='TH') return categoryEN;
      else {
        let categoryTH = '';
        this.formCategory.map(d=>{if (d.categoryEN===categoryEN) categoryTH = d.categoryTH});
        return categoryTH;
      }
    }
  }

  public deleteFormPreview() {
    this.previewDeleting = false;
    this._fileupload.removeMainFormPreview(this.form.previewUrl).then(result1=>{
      if (result1.status) {
        this.form.previewUrl = '';
        this._form.editForm(this.form).then(result2=>{
          if (result2.status) this.previewDeleted = 1;
          else this.previewDeleted = -1;
        });
      } else this.previewDeleted = -1;
    });
  }

}
