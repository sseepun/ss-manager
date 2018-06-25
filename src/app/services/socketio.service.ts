import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { ipHost } from '../globals';

import { SSForm } from '../schemas/ss-form';
import { SubmittedForm } from '../schemas/submitted-form';

@Injectable()
export class SocketioService {

  private socket = io(ipHost);
  public onlineUsers;

  constructor(
  ) { }

  connect(): void {
    this.socket.on('online-users', function(onlineUsers) {
      this.onlineUsers = onlineUsers;
    }.bind(this));
    this.socket.emit('get-online-users');
  }
  getSocket() { return this.socket; }

  getOnlineUsers(): Array<string> { return this.onlineUsers; }
  newMember(username: string): void {this.socket.emit('new-member', username)}
  login(username: string): void {this.socket.emit('member-login', username)}
  logout(): void {this.socket.emit('member-logout')}

  // User account changing
  accountStatus(userId: string): void {this.socket.emit('account-status', userId)}
  accountPrivilage(userId: string): void {this.socket.emit('account-privilage', userId)}
  deleteAccount(userId: string): void {this.socket.emit('account-delete', userId)}

  // Forms
  userFormSubmitted(formId: string): void {this.socket.emit('form-submitted', formId)}
  deletedUserForm(form: SubmittedForm): void {this.socket.emit('form-deleted', form)}
  submittedFormStatusChange(form: SubmittedForm): void {
    this.socket.emit('form-status', form.formId);
    this.socket.emit('form-user-status', form);
  }

  // Main forms
  deleteForm(form: SSForm): void {this.socket.emit('main-form-deleted')}

}
