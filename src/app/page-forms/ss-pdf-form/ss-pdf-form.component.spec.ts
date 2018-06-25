import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsPdfFormComponent } from './ss-pdf-form.component';

describe('SsPdfFormComponent', () => {
  let component: SsPdfFormComponent;
  let fixture: ComponentFixture<SsPdfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsPdfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsPdfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
