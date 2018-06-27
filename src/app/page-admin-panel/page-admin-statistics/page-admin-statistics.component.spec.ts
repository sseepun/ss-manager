import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminStatisticsComponent } from './page-admin-statistics.component';

describe('PageAdminStatisticsComponent', () => {
  let component: PageAdminStatisticsComponent;
  let fixture: ComponentFixture<PageAdminStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
