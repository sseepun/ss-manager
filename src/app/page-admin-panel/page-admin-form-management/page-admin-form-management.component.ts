import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SocketioService } from '../../services/socketio.service';
import { FormService } from '../../services/form.service';
import { TranslationService } from '../../services/translation.service';

import { SSForm } from '../../schemas/ss-form';

@Component({
  selector: 'app-page-admin-form-management',
  templateUrl: './page-admin-form-management.component.html',
  styleUrls: ['./page-admin-form-management.component.css']
})
export class PageAdminFormManagementComponent implements OnInit, OnDestroy {

  private getFormsSubscription: Subscription;
  public options = {
    limit: [10, 25, 50, 100],
    sort: [
      'None', 'Name increasing', 'Name decreasing', 'Status increasing', 'Status decreasing', 
      'Created date increasing', 'Created date decreasing', 'Owner increasing', 'Owner decreasing'
    ]
  };

  public pagination = [];
  public criteria = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  public forms: Array<SSForm> = null;

  public page = 'Table';
  public selectedForm: SSForm = null;

  private processing = false;
  public setActive = false;
  public setActiveNotification = 0;
  public setInactive = false;
  public setInactiveNotification = 0;
  public deleting = false;
  public deletedNotification = 0;

  public created = 0;
  public edited = 0;

  constructor(
    private _socketio: SocketioService,
    private _form: FormService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
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
    this._form.adminGetForms(this.criteria);
  }

  public criteriaChange(selected) {
    this.criteria = {...this.criteria, ...selected};
    this._form.adminGetForms(this.criteria);
  }
  public dateFromObjectId(objectId) {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  }
  public requireEvidence(value) {return value ? 'Yes' : 'No'}

  // Access
  public settingFormActive(form: SSForm) {
    this.selectedForm = form;
    this.setActive = true; this.setActiveNotification = 0;
    this.setInactive = false; this.setInactiveNotification = 0;
    this.deleting = false; this.deletedNotification = 0;
    this.created = 0; this.edited = 0;
  }
  public settingFormInactive(form: SSForm) {
    this.selectedForm = form;
    this.setActive = false; this.setActiveNotification = 0;
    this.setInactive = true; this.setInactiveNotification = 0;
    this.deleting = false; this.deletedNotification = 0;
    this.created = 0; this.edited = 0;
  }
  public deletingForm(form: SSForm) {
    this.selectedForm = form;    
    this.setActive = false; this.setActiveNotification = 0;
    this.setInactive = false; this.setInactiveNotification = 0;
    this.deleting = true; this.deletedNotification = 0;
    this.created = 0; this.edited = 0;
  }
  public accessForm(form: SSForm, page: string) {
    this.selectedForm = form;
    this.setActiveNotification = 0; this.setInactiveNotification = 0; this.deletedNotification = 0;
    this.created = 0; this.edited = 0;
    this.page = page;
  }

  // Actions
  public setFormStatus(form: SSForm, status) {
    if (!this.processing) {
      this.processing = true;
      this._form.setFormStatus(form, status).then(result => {
        this.processing = false;        
        this.selectedForm = null;
        this.setActive = false;
        this.setInactive = false;

        if (status==='Active') {
          if (result.status) this.setActiveNotification = 1;
          else this.setActiveNotification = -1;
        } else if (status==='Inactive') {
          if (result.status) this.setInactiveNotification = 1;
          else this.setInactiveNotification = -1;
        }
        this._form.adminGetForms(this.criteria);
      });
    }
  }
  public deleteForm(form: SSForm) {
    if (!this.processing) {
      this.processing = true;

      this._form.deleteForm(this.selectedForm).then(result=>{
        this._form.adminGetForms(this.criteria);
        this.processing = false;
        this.page = 'Table';
        this.deleting = false;
        this.selectedForm = null;       

        if (result.status) this.deletedNotification = 1;
        else this.deletedNotification = -1;
      });
    }
  }
  public formCreated(result) {
    this.page = 'Table'; this.selectedForm = null;
    this.created = 1; this.edited = 0;
    this._form.adminGetForms(this.criteria);
  }
  public formEdited(result) {
    this.page = 'Table'; this.selectedForm = null;
    this.created = 0; this.edited = 1;
    this._form.adminGetForms(this.criteria);
  }

  ngOnDestroy() {
    this.getFormsSubscription.unsubscribe();
  }

}
