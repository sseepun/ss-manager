import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';

import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css']
})
export class FormResultComponent implements OnInit {

  @Input() page = 'Form';
  @Output() redirect: EventEmitter<any> = new EventEmitter();

  constructor(
    public _t: TranslationService
  ) { }

  ngOnInit() {
  }

  public goToLink(link) {
    this.redirect.emit(link);
  }

}
