import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { SocketioService } from '../../services/socketio.service';
import { CookieService } from '../../services/cookie.service';
import { TranslationService } from '../../services/translation.service';

declare var $: any;

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit, AfterViewInit {

  constructor(
    public _t: TranslationService,
    public router: Router,
    private _socketio: SocketioService,
    private _cookie: CookieService,
    public _user: UserService
  ) { }

  ngOnInit() {
  }

  public themeChange(theme: string): void {
    this._cookie.setThemeCookie(theme);
  }

  public helloUsername() {
    let name = this._user.getUser().username.substring(0, this._user.getUser().username.length);
    if (name.length<13) return name;
    else return name.substring(0, 11)+'...'; 
  }

  public statusClass() {
    if (this._user.getUser().status==='Ban') return 'danger-color strong';
    else if (this._user.getUser().status==='Pending') return 'warning-color strong';
    else return '';
  }
  public userStatus() {return this._user.getUser().status}

  public memberLogOut() {
    this._socketio.logout();
    this._user.setUser(null);
    this._cookie.clearUserLoginCookie();
    this.router.navigate(['/']);
  }

  ngAfterViewInit() {
    $('.nav li a').on('click', function() {
      $('.nav li a').removeClass('active');
      $(this).addClass('active')
    });
  
    $(window).on('scroll', function(){
      if ($(window).scrollTop() > 55) {
        $('nav').addClass('sticky');
        $('.header-space').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
        $('.header-space').removeClass('sticky');
      }
    });
  
    $('body').scrollspy({
      offset: 70
    });

    $('.theme a').on('click', function() {
      $('.theme a').removeClass('active-theme');
      $(this).addClass('active-theme');
    });
  
    $('#day').on('click', function (){
      $('head link#theme').attr('href',$(this).data('theme'));
    });
    $('#night').on('click', function (){
      $('head link#theme').attr('href',$(this).data('theme'));
    });

    var sideslider = $('[data-toggle=menu-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.on('click', function(){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });

  }

}
