import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class GuestRouteGuard implements CanActivate {
  constructor(private _user: UserService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._user.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

@Injectable()
export class MemberRouteGuard implements CanActivate, CanActivateChild {
  constructor(private _user: UserService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this._user.isLoggedIn || !this._user.isActive) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}

@Injectable()
export class AdminRouteGuard implements CanActivate, CanActivateChild {
  constructor(private _user: UserService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this._user.isLoggedIn || !this._user.isActive || !this._user.isAdmin) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}
