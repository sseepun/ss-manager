import { Component, OnInit, Input,  } from '@angular/core';

import { UserService } from '../../services/user.service';
import { TranslationService } from '../../services/translation.service';

import { User } from '../../schemas/user';

@Component({
  selector: 'app-user-profile-template',
  templateUrl: './user-profile-template.component.html',
  styleUrls: ['./user-profile-template.component.css']
})
export class UserProfileTemplateComponent implements OnInit {

  @Input() user: User = null;
  @Input() allowUpdate = false;
  public userDetail = null;

  public page = 'Basic Detail';
  public mode = 'View';

  constructor(
    private _user: UserService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
    this._user.getUserDetail(this.user).then(result=>{
      if (result.status) this.userDetail = result.data;
      console.log(this.userDetail)
    });
  }

  get userProfileImage() {
    if (this.userDetail.profileUrl === undefined || this.userDetail.profileUrl === null || this.userDetail.profileUrl === '')
      return 'assets/img/profile/default.jpg';
    else return '../public/profile/' + this.userDetail.profileUrl;
  }
  public defaultValue(value, d='') {return (value===undefined || value===null) ? d : value;}

}
