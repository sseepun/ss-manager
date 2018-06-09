import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ipHost, testing } from '../globals';

import { JsonResponse } from '../schemas/json-response';
import { User } from '../schemas/user';

@Injectable()
export class CookieService {

  private apiUrl = ipHost + '/cookie';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  setUserLoginCookie(user: User): void {
    let url = this.apiUrl + '/setlogincookie/' + user.username + '/' + user._id;
    this.http.get(url).toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  clearUserLoginCookie(): void {
    let url = this.apiUrl + '/clearlogincookie';
    this.http.get(url).toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }

}
