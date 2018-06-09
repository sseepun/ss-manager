import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ipHost, testing } from '../globals';

import { JsonResponse } from '../schemas/json-response';
import { User } from '../schemas/user';

import { SocketioService } from './socketio.service';

@Injectable()
export class AuthenticationService {

  private apiUrl = ipHost + '/authentication';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http, private _socketio: SocketioService
  ) { }

  authenticate(): Promise<JsonResponse> {
    let url = this.apiUrl + '/authenticate';
    return this.http.get(url).toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  register(formValue): Promise<JsonResponse> {
    let url = this.apiUrl + '/register';
    return this.http.post(url, JSON.stringify(formValue), { headers: this.headers })
      .toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  login(formValue): Promise<JsonResponse> {
    const url = this.apiUrl + '/login';
    return this.http.post(url, JSON.stringify(formValue), { headers: this.headers })
      .toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        if (response.status) this._socketio.login(result.data.username);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
}
