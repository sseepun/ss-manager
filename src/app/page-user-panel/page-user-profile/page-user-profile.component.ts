import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page-user-profile',
  templateUrl: './page-user-profile.component.html',
  styleUrls: ['./page-user-profile.component.css']
})
export class PageUserProfileComponent implements OnInit {

  constructor(
    public _user: UserService
  ) { }

  ngOnInit() {
  }

}
