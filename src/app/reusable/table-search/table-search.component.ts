import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {

  @Input() type = 1;
  @Input() criteria = {
    limit: [10, 25, 50, 100],
    sort: [
      'None', 'Name increasing', 'Name decreasing', 'Owner increasing', 'Owner decreasing', 
      'Created date increasing', 'Created date decreasing'
    ]
  };
  @Input() selected = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  @Output() criteriaChange: EventEmitter<any> = new EventEmitter();

  constructor(public _t: TranslationService) { }

  ngOnInit() {
  }

  public limitChange(value) {
    this.selected.limit = value;
    this.selected.page = 0;
    this.selected.start = 0;
    this.selected.total = 0;
    this.criteriaChange.emit(this.selected);
  }
  public sortChange(value) {
    this.selected.sort = value;
    this.criteriaChange.emit(this.selected);
  }
  public searchChange(value) {
    value = value.trim();
    value = value.replace(/\//g, '');
    value = value.replace(/\\/g, '');
    value = value.replace(/  /g, '');
    if (value !== this.selected.search) {
      this.selected.page = 0;
      this.selected.start = 0;
      this.selected.search = value;
      this.criteriaChange.emit(this.selected);
    }
  }

  public limitStyle() {
    if (this._t.getLanguage==='EN') return {width: 'calc(100% - 117px)'};
    else return {width: 'calc(100% - 94px)'};
  }
  public sortStyle() {
    if (this._t.getLanguage==='EN') return {width: 'calc(100% - 61px)'};
    else return {width: 'calc(100% - 66px)'};
  }
  public searchStyle() {
    if (this._t.getLanguage==='EN') return {width: 'calc(100% - 85px)', 'margin-left': 0};
    else return {width: 'calc(100% - 62px)', 'margin-left': 0};
  }

}
