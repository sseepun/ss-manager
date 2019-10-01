import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SocketioService } from '../../services/socketio.service';
import { FormService } from '../../services/form.service';
import { TranslationService } from '../../services/translation.service';

import { FormCategory } from '../../schemas/form-category';

@Component({
  selector: 'app-page-admin-form-category',
  templateUrl: './page-admin-form-category.component.html',
  styleUrls: ['./page-admin-form-category.component.css']
})
export class PageAdminFormCategoryComponent implements OnInit {

  public options = {
    limit: [10, 25, 50, 100],
    sort: ['None', 'Created date increasing', 'Created date decreasing']
  };

  public pagination = [];
  public criteria = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  public formCategory: Array<FormCategory> = null;

  public page = 'Table';
  public selectedCategory: FormCategory = null;
  private processing = false;
  public deleting = false;
  public deleted = 0;
  public created = 0;

  constructor(
    private _form: FormService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
    this.refreshFormCategory();
  }
  refreshFormCategory() {
    this._form.getFormCategory(this.criteria).then(result=>{
      if (result.status) {
        this.formCategory = result.data as Array<FormCategory>;
        this.criteria.total = result.total;

        this.pagination = [];
        let count = 0;
        while (count * this.criteria.limit < this.criteria.total) {
          this.pagination.push(count);
          count += 1;
        }
      }
    });
  }

  public criteriaChange(selected) {
    this.criteria = {...this.criteria, ...selected};
    this.refreshFormCategory();
  }
  public dateFromObjectId(objectId) {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  }

  public accessFormCategory(formCategory: FormCategory, page: string) {
    this.selectedCategory = formCategory;
    this.deleting = false; this.deleted = 0; this.created = 0;
    this.page = page;
  }
  public deletingFormCategory(formCategory: FormCategory) {
    this.selectedCategory = formCategory;
    this.deleting = true; this.deleted = 0; this.created = 0;
  }
  public deleteFormCategory() {
    if (!this.processing && this.selectedCategory!==null) {
      this.processing = true;

      this._form.deleteFormCategory(this.selectedCategory as FormCategory).then(result=>{
        this.processing = false;

        this.page = 'Table';
        this.selectedCategory = null;
        this.refreshFormCategory();        
        
        if (result.status) this.deleted = 1;
        else this.deleted = -1;
      });
    }
  }
  public createFormCategory(result) {
    this.page = 'Table';
    this.selectedCategory = null;
    this.created = 1;
    this.refreshFormCategory();
  }

}
