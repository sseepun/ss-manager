import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ipHost, testing } from '../globals';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { JsonResponse } from '../schemas/json-response';
import { User } from '../schemas/user';

import { SocketioService } from './socketio.service';

@Injectable()
export class AdminService {

  private apiUrl = ipHost + '/admin';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private subjectUsers = new Subject<any>();

  constructor(
    private http: Http,
    private _socketio: SocketioService
  ) { }

  getUsers(criteria): Promise<void> {
    let search = criteria.search;
    if (search==='') search = 'EmptyNone';
    let url = this.apiUrl + '/getusers/' + criteria.start + '/' + criteria.limit + '/' 
      + criteria.sort + '/' + search;

    return this.http.get(url).toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        this.subjectUsers.next(result as JsonResponse);
      })
      .catch(err => {
        this.subjectUsers.next({status: false, message: err, data: null} as JsonResponse);
      });
  }

  setAccoundStatus(user: User, status): Promise<JsonResponse> {
    let url = this.apiUrl + '/setaccountstatus',
        input = { userId: user._id, status: status };
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        if (result.status) this._socketio.accountStatus(user._id);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  updateUserPrivilage(userId, updatedUser: User): Promise<JsonResponse> {
    let url = this.apiUrl + '/updateuserprivilage',
        input = { userId: userId, updatedUser: updatedUser };
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  deleteAccount(user: User): Promise<JsonResponse> {
    let url = this.apiUrl + '/deleteaccount',
        input = { userId: user._id };
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        if (result.status) this._socketio.deleteAccount(user._id);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }

  // Observable
  observeUsers(): Observable<any> {
    return this.subjectUsers.asObservable();
  }

}
