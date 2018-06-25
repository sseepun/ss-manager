import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SocketioService } from '../services/socketio.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { CookieService } from '../services/cookie.service';
import { TranslationService } from '../services/translation.service';

import { JsonResponse } from '../schemas/json-response';
import { User } from '../schemas/user';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {

  private processing = false;
  public usernameInUse = false;
  public emailInUse = false;
  public passTooShort = false;
  public passNotMatch = false;  

  constructor(
    public router: Router,
    private _socketio: SocketioService,
    private _authentication: AuthenticationService,
    private _user: UserService,
    private _cookie: CookieService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
  }

  registerMember(form: NgForm) {
    if (!this.processing) {
      this.processing = true;

      if (form.value.password!==form.value.confirmPassword) {
        this.processing = false;
        this.registerErrorType(-3);
      } else {
        this._authentication.register(form.value)
          .then((response: JsonResponse) => {
            if (response.status) {
              this.registerSuccess(form.value);
              form.resetForm();
              this.registerErrorType();
            } else this.registerErrorType(response.data);

            this.processing = false;
          });
      }
    }
  }
  registerErrorType(index=-100) {
    if (index==0) {
      this.passNotMatch = false; this.passTooShort = true; this.usernameInUse = false; this.emailInUse = false;
    } else if (index==-1) {
      this.passNotMatch = false; this.passTooShort = false; this.usernameInUse = true; this.emailInUse = false;
    } else if (index==-2) {
      this.passNotMatch = false; this.passTooShort = false; this.usernameInUse = false; this.emailInUse = true;
    } else if (index==-3) {
      this.passNotMatch = true; this.passTooShort = false; this.usernameInUse = false; this.emailInUse = false;
    } else {
      this.passNotMatch = false; this.passTooShort = false; this.usernameInUse = false; this.emailInUse = false;
    }
  }
  registerSuccess(formValue) {
    this._socketio.newMember(formValue.username);
    this._authentication.login(formValue)
      .then((result: JsonResponse) => {
        this._socketio.login(result.data.username);
        this._user.setUser(result.data as User);
        this.router.navigate(['/check-status']);
        this._cookie.setUserLoginCookie(result.data as User);
      });
  }

}
