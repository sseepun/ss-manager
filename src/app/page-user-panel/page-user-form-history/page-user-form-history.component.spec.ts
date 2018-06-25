import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserFormHistoryComponent } from './page-user-form-history.component';

describe('PageUserFormHistoryComponent', () => {
  let component: PageUserFormHistoryComponent;
  let fixture: ComponentFixture<PageUserFormHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserFormHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserFormHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
