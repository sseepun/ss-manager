import { Component, OnInit, OnDestroy, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';

import { SocketioService } from './services/socketio.service';
import { UserService } from './services/user.service';
import { CookieService } from './services/cookie.service';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    public router: Router,  
    private _socketio: SocketioService,
    private _user: UserService,
    private _cookie: CookieService
  ) { }
  
  ngOnInit() {
    this._socketio.connect();

    // Get announcement from Socket.io
    this._socketio.getSocket().on('announce-account-status', function(userId) {
      if (this.yourAccount(userId)) {
        this._user.update();
        this.router.navigate(['/check-status']);
      }
    }.bind(this));
    this._socketio.getSocket().on('announce-account-delete', function(userId) {
      if (this.yourAccount(userId)) {
        this._socketio.logout();
        this._user.logoutUser();
        this.router.navigate(['/']);
      }
    }.bind(this));
    this._socketio.getSocket().on('announce-account-privilage', function(userId) {
      if (this.yourAccount(userId)) {
        this._user.update();
        this.router.navigate(['/']);
      }
    }.bind(this));
  }

  yourAccount(userId) {
    if (this._user.getUser()!==undefined && this._user.getUser()!==null && userId===this._user.getUser()._id) {
      return true;
    } else return false;
  }

  ngOnDestroy() {
    // Unbind Socket.io
    this._socketio.getSocket().removeAllListeners('announce-account-status');
    this._socketio.getSocket().removeAllListeners('announce-account-delete');
    this._socketio.getSocket().removeAllListeners('announce-account-privilage');
  }
}
