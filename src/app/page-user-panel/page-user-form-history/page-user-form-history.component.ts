import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SocketioService } from '../../services/socketio.service';
import { UserService } from '../../services/user.service';
import { FormService } from '../../services/form.service';
import { TranslationService } from '../../services/translation.service';

import { SubmittedForm } from '../../schemas/submitted-form';

@Component({
  selector: 'app-page-user-form-history',
  templateUrl: './page-user-form-history.component.html',
  styleUrls: ['./page-user-form-history.component.css']
})
export class PageUserFormHistoryComponent implements OnInit, OnDestroy {
  
  private getSubmittedFormsSubscription: Subscription;
  public options = {
    limit: [10, 25, 50, 100],
    sort: [
      'None', 'Status increasing', 'Status decreasing', 
      'Submitted date increasing', 'Submitted date decreasing'
    ]
  };
  public criteria = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  public pagination = [];
  public forms: Array<SubmittedForm> = null;

  private processing = false;
  public deleteNotification = false;
  public selectedDeleteForm: SubmittedForm = null;

  constructor(
    private router: Router,
    private _socketio: SocketioService,
    private _user: UserService,
    private _form: FormService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
    this.getSubmittedFormsSubscription = this._form.observeSubmittedForms().subscribe(result => {
      if (result.status) {
        this.forms = result.data as Array<SubmittedForm>;
        this.criteria.total = result.totalSubmittedForms;

        this.pagination = [];
        let count = 0;
        while (count * this.criteria.limit < this.criteria.total) {
          this.pagination.push(count);
          count += 1;
        }
      }
    });
    this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);

    // Get announcement from Socket.io
    this._socketio.getSocket().on('announce-form-user-status', function (form: SubmittedForm) {
      this.yourSubmittedFormUpdate(form.userId);
    }.bind(this));
    this._socketio.getSocket().on('announce-form-deleted', function (form: SubmittedForm) {
      this.yourSubmittedFormUpdate(form.userId);
    }.bind(this));
    this._socketio.getSocket().on('announce-main-form-deleted', function (form) {
      this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);
    }.bind(this));
  }
  yourSubmittedFormUpdate(userId) {
    if (userId === this._user.getUser()._id) {
      this.selectedDeleteForm = null;
      this._form.setMode();
      this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);
    }
  }

  dateFromObjectId(objectId) {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  }
  criteriaChange(selected) {
    this.criteria = {...this.criteria, ...selected};
    this._form.getSubmittedForms(this._user.getUser()._id, this.criteria);
  }

  public viewSubmittedForm(form): void {
    this.router.navigate(['/forms/' + form.form.accessCode]);
    this._form.setMode('View', 'User', form);
  }
  public editSubmittedForm(form): void {
    this.router.navigate(['/forms/' + form.form.accessCode]);
    this._form.setMode('Edit', 'User', form);
  }
  public tryDeleteSubmittedForm(form): void {
    this.selectedDeleteForm = form;
    this.deleteNotification = false;
  }
  public deleteSubmittedForm(): void {
    if (this.selectedDeleteForm !== null && !this.processing) {
      this.processing = true;
      this._form.deleteSubmittedForm(this._user.getUser()._id, this.selectedDeleteForm).then(result => {
        if (result.status) {
          this.deleteNotification = true;
          this.selectedDeleteForm = null;
          this.pagination = [];
          this.forms = null;
        } else this.selectedDeleteForm = null;
        this.processing = false;
      });
    }
  }
  public cancelDeleteSubmittedForm(): void {
    if (!this.processing) this.selectedDeleteForm = null;
  }

  ngOnDestroy() {
    this.getSubmittedFormsSubscription.unsubscribe();

    // Unbind Socket.io
    this._socketio.getSocket().removeAllListeners('announce-form-user-status');
    this._socketio.getSocket().removeAllListeners('announce-form-deleted');
    this._socketio.getSocket().removeAllListeners('announce-main-form-deleted');
  }

}
