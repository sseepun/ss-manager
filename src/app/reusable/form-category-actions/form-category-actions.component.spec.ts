import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoryActionsComponent } from './form-category-actions.component';

describe('FormCategoryActionsComponent', () => {
  let component: FormCategoryActionsComponent;
  let fixture: ComponentFixture<FormCategoryActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCategoryActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCategoryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
