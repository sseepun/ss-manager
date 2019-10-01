import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormService } from '../../services/form.service';
import { TranslationService } from '../../services/translation.service';

import { FormCategory } from '../../schemas/form-category';

@Component({
  selector: 'app-form-category-actions',
  templateUrl: './form-category-actions.component.html',
  styleUrls: ['./form-category-actions.component.css']
})
export class FormCategoryActionsComponent implements OnInit {

  @Input() type = 'Create';
  @Output() formCategoryCreated: EventEmitter<any> = new EventEmitter();

  public existed1 = 0;
  public existed2 = 0;

  public processing = false;
  public failed = 0;

  constructor(
    private _form: FormService,
    public _t: TranslationService
  ) { }

  ngOnInit() {
  }

  adminCreateFormCategory(formCategory: NgForm) {
    if (!this.processing) {
      this.processing = true;
      this.existed1 = 0; this.existed2 = 0;
      this.failed = 0;

      this._form.createFormCategory(formCategory.value as FormCategory).then(result=>{
        this.processing = false;

        if (result.status) this.formCategoryCreated.emit(result);
        else {
          if (result.data===null) this.failed = 1;
          else if (result.data===0) this.existed1 = 1;
          else this.existed2 = 1;
        }
      });
    }
  }

}
