import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminUserManagementComponent } from './page-admin-user-management.component';

describe('PageAdminUserManagementComponent', () => {
  let component: PageAdminUserManagementComponent;
  let fixture: ComponentFixture<PageAdminUserManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminUserManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
