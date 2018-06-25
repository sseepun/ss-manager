import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { CookieService } from '../services/cookie.service';
import { TranslationService } from '../services/translation.service';

import { JsonResponse } from '../schemas/json-response';
import { User } from '../schemas/user';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  private processing = false;
  public loginMsg: string = null;
  
  constructor(
    public router: Router,
    public _t: TranslationService,  
    private _authentication: AuthenticationService,
    private _user: UserService,
    private _cookie: CookieService
  ) { }

  ngOnInit() {
  }

  memberLogIn(form: NgForm) {
    if (!this.processing) {
      this.processing = true;

      this._authentication.login(form.value)
        .then((result: JsonResponse) => {
          if (result.status) {
            if (form.value.rememberme) this._cookie.setUserLoginCookie(result.data);
            else this._cookie.clearUserLoginCookie();

            this.loginMsg = null;
            this.loginSuccess(result.data as User);
            form.resetForm();
          } else this.loginMsg = result.message;

          this.processing = false;
        });
    }
  }
  loginSuccess(user: User) {
    this._user.setUser(user);
    this.router.navigate(['/']);
  }

}
