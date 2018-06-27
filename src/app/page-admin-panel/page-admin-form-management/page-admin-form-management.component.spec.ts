import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminFormManagementComponent } from './page-admin-form-management.component';

describe('PageAdminFormManagementComponent', () => {
  let component: PageAdminFormManagementComponent;
  let fixture: ComponentFixture<PageAdminFormManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminFormManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminFormManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
