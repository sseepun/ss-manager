import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SocketioService } from '../services/socketio.service';
import { FormService } from '../services/form.service';
import { TranslationService } from '../services/translation.service';

import { SSForm } from '../schemas/ss-form';
import { FormCategory } from '../schemas/form-category';

@Component({
  selector: 'app-page-forms',
  templateUrl: './page-forms.component.html',
  styleUrls: ['./page-forms.component.css']
})
export class PageFormsComponent implements OnInit, OnDestroy {

  public pageName = 'All Forms';
  public formCatagory: Array<FormCategory> = [];

  private getFormsSubscription: Subscription;
  public criteria = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  public pagination = [];
  public forms: Array<SSForm> = null;

  constructor(
    public _t: TranslationService,
    public router: Router,
    private _form: FormService,
    private _socketio: SocketioService
  ) { }

  ngOnInit() {
    this._form.getFormCategory().then(result => {
      if (result.status) this.formCatagory = result.data as Array<FormCategory>;
    });

    this.getFormsSubscription = this._form.observeForms().subscribe(result => {
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
    this._form.getActiveForms(this.criteria);

    // Get announcement from Socket.io
    this._socketio.getSocket().on('announce-main-form-deleted', function (form: SSForm) {
      this._form.getActiveForms(this.criteria);
    }.bind(this));
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

  criteriaChange(selected) {
    this.criteria = {...this.criteria, ...selected};
    this._form.getActiveForms(this.criteria);
  }

  changeFormCategory(category) {
    if (this.pageName!==category) {
      this.pageName = category; 
      this.criteria.page = 0; 
      this.criteria.start = 0;

      if (category==='All Forms') this.criteria.category = 'None';
      else this.criteria.category = category;
      this._form.getActiveForms(this.criteria);
    }
  }
  goToForm(form: SSForm) {
    this.router.navigate(['/forms/' + form.accessCode]);
    this._form.setMode();
  }
  
  paginationChangePage(page) {
    this.criteria.page = page;
    this.criteria.start = page * this.criteria.limit;
    this._form.getActiveForms(this.criteria);
  }
  previouseFormPage() {
    if (this.criteria.page > 0) {
      this.criteria.page -= 1;
      this.criteria.start = this.criteria.page * this.criteria.limit;
      this._form.getActiveForms(this.criteria);
    }
  }
  nextFormPage() {
    if ((this.criteria.page + 1) * this.criteria.limit < this.criteria.total) {
      this.criteria.page += 1;
      this.criteria.start = this.criteria.page * this.criteria.limit;
      this._form.getActiveForms(this.criteria);
    }
  }

  ngOnDestroy() {
    this.getFormsSubscription.unsubscribe();
    this._socketio.getSocket().removeAllListeners('announce-main-form-deleted');
  }

}
