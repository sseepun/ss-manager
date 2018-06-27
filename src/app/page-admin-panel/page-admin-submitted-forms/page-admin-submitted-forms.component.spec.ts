import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminSubmittedFormsComponent } from './page-admin-submitted-forms.component';

describe('PageAdminSubmittedFormsComponent', () => {
  let component: PageAdminSubmittedFormsComponent;
  let fixture: ComponentFixture<PageAdminSubmittedFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminSubmittedFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminSubmittedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
