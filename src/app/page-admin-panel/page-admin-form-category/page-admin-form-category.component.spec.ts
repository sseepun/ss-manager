import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminFormCategoryComponent } from './page-admin-form-category.component';

describe('PageAdminFormCategoryComponent', () => {
  let component: PageAdminFormCategoryComponent;
  let fixture: ComponentFixture<PageAdminFormCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminFormCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
