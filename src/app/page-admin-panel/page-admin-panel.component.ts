import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FormService } from '../services/form.service';
import { SocketioService } from '../services/socketio.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-page-admin-panel',
  templateUrl: './page-admin-panel.component.html',
  styleUrls: ['./page-admin-panel.component.css']
})
export class PageAdminPanelComponent implements OnInit, OnDestroy {

  private pendingFormSubscription: Subscription;
  public pendingFormNumber = 0;

  constructor(
    private _form: FormService,
    private _socket: SocketioService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
    this.pendingFormSubscription = this._form.observePendingFormNumber().subscribe(result => {
      if (result.status) this.pendingFormNumber = result.data;
    });
    this._form.getPendingFormNumber();

    // Get form announcement from Socket.io
    this._socket.getSocket().on('announce-form-pending-number', function () {
      this._form.getPendingFormNumber();
    }.bind(this));
    this._socket.getSocket().on('announce-gov-form-deleted', function (govForm) {
      this._form.getPendingFormNumber();
    }.bind(this));
  }

  ngOnDestroy() {
    this.pendingFormSubscription.unsubscribe();

    // Unbind Socket.io
    this._socket.getSocket().removeAllListeners('announce-form-pending-number');
    this._socket.getSocket().removeAllListeners('announce-gov-form-deleted');
  }

}
