import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SocketioService } from '../../services/socketio.service';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';
import { TranslationService } from '../../services/translation.service';

import { User } from '../../schemas/user';

@Component({
  selector: 'app-page-admin-user-management',
  templateUrl: './page-admin-user-management.component.html',
  styleUrls: ['./page-admin-user-management.component.css']
})
export class PageAdminUserManagementComponent implements OnInit, OnDestroy {

  private getUsersSubscription: Subscription;
  public options = {
    limit: [10, 25, 50, 100],
    sort: [
      'None', 'First name increasing', 'First name decreasing', 'Last name increasing', 'Last name decreasing', 
      'Level increasing', 'Level decreasing', 'Status increasing', 'Status decreasing',
      'Register date increasing', 'Register date decreasing'
    ]
  };

  public pagination = [];  
  public criteria = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  public users: Array<User> = null;
  public selectedUser: User = null;
  public page = 'Table';

  private processing = false;
  public setActive = false;
  public setActiveNotification = 0;
  public setInactive = false;
  public setInactiveNotification = 0;
  public deleting = false;
  public deletedNotification = 0;

  constructor(
    private _socketio: SocketioService,
    public _user: UserService,
    private _admin: AdminService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
    this.getUsersSubscription = this._admin.observeUsers().subscribe(result=>{
      if (result.status) {
        this.users = result.data;
        this.criteria.total = result.totalUsers;

        this.pagination = [];
        let count = 0;
        while (count * this.criteria.limit < this.criteria.total) {
          this.pagination.push(count);
          count += 1;
        }
      }
    });
    this._admin.getUsers(this.criteria);

    this._socketio.getSocket().on('update-new-users', function() {
      this._admin.getUsers(this.criteria);
    }.bind(this));
    this._socketio.getSocket().on('announce-account-status', function() {
      this._admin.getUsers(this.criteria);
    }.bind(this));
    this._socketio.getSocket().on('announce-account-delete', function() {
      this._admin.getUsers(this.criteria);
    }.bind(this));
  }

  public criteriaChange(selected) {
    this.criteria = {...this.criteria, ...selected};
    this._admin.getUsers(this.criteria);
  }
  public dateFromObjectId(objectId) {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  }

  private clearProcess() {
    this.selectedUser = null;
    this.setActive = false; this.setInactive = false; this.deleting = false;
    this.setActiveNotification = 0; this.setInactiveNotification = 0;
    this.deletedNotification = 0;
    this.processing = false;
  }
  public trySetUserStatus(user: User, status) {
    this.selectedUser = user;
    if (status==='Active') this.setActive = true;
    else this.setInactive = true;
  }
  public setUserStatus(user: User, status) {
    if (!this.processing) {
      this.processing = true;

      this._admin.setAccoundStatus(user, status).then(result => {
        this.clearProcess();

        if (result.status) {
          this._admin.getUsers(this.criteria);
          if (status==='Active') this.setActiveNotification = 1;
          else this.setInactiveNotification = 1;
        } else {
          if (status==='Active') this.setActiveNotification = -1;
          else this.setInactiveNotification = -1;
        }
      });
    }
  }
  public tryDeleteUser(user: User) {this.selectedUser = user; this.deleting = true;}
  public deleteUser(user: User) {
    if (!this.processing) {
      this.clearProcess();

      this._admin.deleteAccount(user).then(result => {
        if (result.status) {
          this._admin.getUsers(this.criteria);
          this.deletedNotification = 1;
        } else this.deletedNotification = -1;
      });
    }
  }

  ngOnDestroy() {
    this.getUsersSubscription.unsubscribe();

    // Unbind Socket.io
    this._socketio.getSocket().removeAllListeners('update-new-users');
    this._socketio.getSocket().removeAllListeners('announce-account-status');
    this._socketio.getSocket().removeAllListeners('announce-account-delete');
  }

}
