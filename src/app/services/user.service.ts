import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ipHost, testing } from '../globals';

import { JsonResponse } from '../schemas/json-response';
import { User } from '../schemas/user';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {

  private user: User;

  private apiUrl = ipHost + '/user';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http,
    private _authentication: AuthenticationService
  ) { }

  init(): Promise<void> {
    // Check cookie language
    this._authentication.cookieLanguage();
    // Check remember me login
    return this._authentication.authenticate()
      .then(result => {
        if (result.status) {
          this.setUser(result.data as User);
        }
      });
  }

  get isLoggedIn(): boolean {return this.user!==undefined && this.user!==null}
  get isAdmin(): boolean {return this.user!==undefined && this.user!==null && this.user.level>=7}
  get isActive(): boolean {return this.user!==undefined && this.user!==null && this.user.status==='Active'}

  setUser(user: User): void {this.user = user}
  getUser(): User {return this.user} 
  logoutUser(): void {this.user = undefined}

  update(): Promise<void> {
    let url = this.apiUrl + '/update/' + this.user._id;
    return this.http.get(url).toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        this.user = result.data as User;
      })
      .catch(err => {
        this.user = null;
      });
  }
  getUserDetail(user: User): Promise<JsonResponse> {
    const url = this.apiUrl + '/detail/' + user._id;
    return this.http.get(url).toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  updateUserDetail(userId, updatedUserDetail): Promise<JsonResponse> {
    let url = this.apiUrl + '/updatedetail',
        input = { userId: userId, updatedUserDetail: updatedUserDetail };
    return this.http.post(url, JSON.stringify(input), { headers: this.headers })
      .toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }

  getUserById(userId: string): Promise<JsonResponse> {
    let url = this.apiUrl + '/getuserbyid/' + userId;
    return this.http.get(url).toPromise()
      .then(response => {
        let result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }
  getUserDetailById(userId: string): Promise<JsonResponse> {
    const url = this.apiUrl + '/detail/' + userId;
    return this.http.get(url).toPromise()
      .then(response => {
        const result = response.json();
        if (testing) console.log(result.message);
        return result as JsonResponse;
      })
      .catch(err => {return {status: false, message: err, data: null} as JsonResponse});
  }

}
