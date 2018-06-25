import { Component, OnInit } from '@angular/core';

import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-page-user-panel',
  templateUrl: './page-user-panel.component.html',
  styleUrls: ['./page-user-panel.component.css']
})
export class PageUserPanelComponent implements OnInit {

  constructor(
    public _t: TranslationService
  ) { }

  ngOnInit() {
  }

}
