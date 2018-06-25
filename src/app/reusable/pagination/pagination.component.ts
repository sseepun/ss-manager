import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pagination = [];
  @Input() selected = {
    page: 0, start: 0, limit: 25, total: 0,
    sort: 'None', search: '', category: 'None'
  };
  @Output() criteriaChange: EventEmitter<any> = new EventEmitter();

  constructor(public _t: TranslationService) { }

  ngOnInit() {
  }

  public previousPage() {
    this.selected.page = Math.max(0, this.selected.page-1);
    this.selected.start = this.selected.page * this.selected.limit;
    this.criteriaChange.emit(this.selected);
  }
  public nextPage() {
    this.selected.page = Math.min(this.pagination.length-1, this.selected.page+1);
    this.selected.start = this.selected.page * this.selected.limit;
    this.criteriaChange.emit(this.selected);
  }
  public selectPage(page) {
    this.selected.page = page;
    this.selected.start = this.selected.page * this.selected.limit;
    this.criteriaChange.emit(this.selected);
  }

}
