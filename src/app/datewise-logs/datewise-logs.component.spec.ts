import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseLogsComponent } from './datewise-logs.component';

describe('DatewiseLogsComponent', () => {
  let component: DatewiseLogsComponent;
  let fixture: ComponentFixture<DatewiseLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatewiseLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatewiseLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
