import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SocketioService } from '../../services/socketio.service';
import { FormService } from '../../services/form.service';
import { UserService } from '../../services/user.service';
import { TranslationService } from '../../services/translation.service';

import { SSForm } from '../../schemas/ss-form';
import { SubmittedForm } from '../../schemas/submitted-form';
import { User } from '../../schemas/user';

@Component({
  selector: 'app-page-admin-submitted-forms',
  templateUrl: './page-admin-submitted-forms.component.html',
  styleUrls: ['./page-admin-submitted-forms.component.css']
})
export class PageAdminSubmittedFormsComponent implements OnInit {

  private getFormsSubscription: Subscription;
  private getSubmittedFormsSubscription: Subscription;  

  public pagination = [];  
  public criteria = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  public forms: Array<SSForm> = null;
  public selectedForm: SSForm = null;

  public tableOptions = {
    limit: [1, 10, 25, 50, 100],
    sort: [
      'None', 'Status increasing', 'Status decreasing', 
      'Submitted date increasing', 'Submitted date decreasing'
    ]
  };
  public tableCriteria = {
    page: 0, start: 0, limit: 25, total: 0, 
    sort: 'None', search: '', category: 'None'
  };
  public submittedForms: Array<SubmittedForm> = null;

  private processing = false;  
  public selectedSubmittedForm: SubmittedForm = null;
  public approving = false;
  public approvedNotification = 0;
  public notApproving = false;
  public notApprovedNotification = 0;
  public deleting = false;
  public deletedNotification = 0;

  private bypass = false;

  constructor(
    private router: Router,
    private _socketio: SocketioService,
    private _form: FormService,
    private _user: UserService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
    // Subscription
    this.getFormsSubscription = this._form.observeAdminForms().subscribe(result => {
      if (result.status) {
        this.forms = result.data as Array<SSForm>;
        this.criteria.total = result.totalForms;

        this.pagination = [];
        let count = 0;
        while (count * this.criteria.limit < this.criteria.total) {
          this.pagination.push(count);
          count += 1;
        }
      }
    });
    this.getSubmittedFormsSubscription = this._form.observeAdminSubmittedForms().subscribe(result => {
      if (result.status) {
        this.submittedForms = result.data as Array<SubmittedForm>;
        this.tableCriteria.total = result.totalForms;

        this.pagination = [];
        let count = 0;
        while (count * this.tableCriteria.limit < this.tableCriteria.total) {
          this.pagination.push(count);
          count += 1;
        }
      }
    });

    // Initialize
    if ((this._form.getMode=='ViewByPass' || this._form.getMode=='EditByPass') 
    && this._form.getRole==='Admin') {
      this.tableCriteria = this._form.getCriteria;
      this.selectedForm = this._form.getForm;
      this._form.setMode();
    }
    if (this.selectedForm===null) this._form.adminGetActiveForms(this.criteria);
    else this._form.adminGetSubmittedForms(this.selectedForm, this.tableCriteria);

    // Get announcement from Socket.io
    this._socketio.getSocket().on('announce-form-submitted', function (formId) {
      this.socketioUpdateProcess(formId);
    }.bind(this));
    this._socketio.getSocket().on('announce-form-deleted', function (form) {
      this.socketioUpdateProcess(form.formId);
    }.bind(this));
    this._socketio.getSocket().on('announce-form-status', function (formId) {
      this.socketioUpdateProcess(formId);
    }.bind(this));
  }
  socketioUpdateProcess(formId) {
    if (this.selectedForm===null && this.forms!==null) {
      let formList = this.forms.map(d => d._id);
      if (formList.indexOf(formId)>-1) this._form.adminGetActiveForms(this.criteria);
    } else if (this.selectedForm!==null) {
      if (this.selectedForm._id===formId) this._form.adminGetSubmittedForms(this.selectedForm, this.tableCriteria);
    }
  }

  // Forms
  public criteriaChange(selected) {
    this.criteria = {...this.criteria, ...selected};
    this._form.adminGetActiveForms(this.criteria);
  }
  public formPreview(form: SSForm) {
    if (form.previewUrl===undefined || form.previewUrl===null || form.previewUrl==='') return 'assets/img/formPreview/default.jpg';
    else return '../public/formPreview/' + form.previewUrl;
  }
  public formOwner(form: SSForm) {
    if (form.owner===undefined || form.owner===null || form.owner==='') return 'SS';
    else return form.owner;
  }
  public dateFromObjectId(objectId) {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  }
  public formName(form: SSForm) {
    if (this._t.getLanguage=='EN') return form.nameEN;
    else return form.nameTH; 
  }
  public selectForm(form: SSForm) {
    this.selectedForm = form;
    this._form.adminGetSubmittedForms(this.selectedForm, this.tableCriteria);
  }

  // Submitted forms
  public tableCriteriaChange(selected) {
    this.tableCriteria = {...this.tableCriteria, ...selected};
    this._form.adminGetSubmittedForms(this.selectedForm, this.tableCriteria);
  }
  public backToFormPage() {
    this.selectedForm = null;
    this.tableCriteria = {
      page: 0, start: 0, limit: 25, total: 0, 
      sort: 'None', search: '', category: 'None'
    };
    this.submittedForms = null;
    this._form.setMode();
    this._form.adminGetActiveForms(this.criteria);
  }

  public approvingSubmittedForm (submittedForm: SubmittedForm) {
    this.selectedSubmittedForm = submittedForm;
    this.approving = true; this.approvedNotification = 0;
    this.notApproving = false; this.notApprovedNotification = 0;
    this.deleting = false; this.deletedNotification = 0;
  }
  public notApprovingSubmittedForm (submittedForm: SubmittedForm) {
    this.selectedSubmittedForm = submittedForm;
    this.approving = false; this.approvedNotification = 0;
    this.notApproving = true; this.notApprovedNotification = 0;
    this.deleting = false; this.deletedNotification = 0;
  }
  public setSubmittedFormStatus(form: SubmittedForm, status: string) {
    if (!this.processing) {
      this.processing = true;
      let approver = Object.assign({}, this._user.getUser());
      this._form.setSubmittedFormStatus(form, status, approver).then(result => {
        if (status==='Approved') {
          if (result.status) this.approvedNotification = 1;
          else this.approvedNotification = -1;
        } else {
          if (result.status) this.notApprovedNotification = 1;
          else this.notApprovedNotification = -1;
        }
        this.processing = false;
        this.approving = false;
        this.notApproving = false;
        this.selectedSubmittedForm = null;
      });
    }
  }

  public deletingingSubmittedForm(submittedForm: SubmittedForm) {
    this.selectedSubmittedForm = submittedForm;
    this.approving = false; this.approvedNotification = 0;
    this.notApproving = false; this.notApprovedNotification = 0;
    this.deleting = true; this.deletedNotification = 0;
  }
  public deleteSubmittedForm(submittedForm: SubmittedForm) {
    if (!this.processing) {
      this.processing = true;
      this._form.deleteSubmittedForm(submittedForm.userId, submittedForm).then(result => {
        if (result.status) this.deletedNotification = 1;
        else this.deletedNotification = -1;
        this.processing = false;
        this.deleting = false;
        this.selectedSubmittedForm = null;
      });
    }
  }

  // By Pass
  public byPassSubmittedForm(submittedForm: SubmittedForm, byPass) {
    if (this._user.getUser().level >= 7) {
      this.bypass = true;
      this._form.setMode(byPass, 'Admin', submittedForm, this.selectedForm, this.tableCriteria);
      this.router.navigate(['/forms/' + this.selectedForm.accessCode]);
    } else this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.getFormsSubscription.unsubscribe();
    this.getSubmittedFormsSubscription.unsubscribe();
    if (this._form.getRole!=='Admin' || !this.bypass) this._form.setMode();

    // Unbind Socket.io
    this._socketio.getSocket().removeAllListeners('announce-form-submitted');
    this._socketio.getSocket().removeAllListeners('announce-form-deleted');
    this._socketio.getSocket().removeAllListeners('announce-form-status');
  }

}
