import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogTableComponent } from './call-log-table.component';

describe('CallLogTableComponent', () => {
  let component: CallLogTableComponent;
  let fixture: ComponentFixture<CallLogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
