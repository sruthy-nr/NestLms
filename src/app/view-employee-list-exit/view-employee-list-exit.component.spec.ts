import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeListExitComponent } from './view-employee-list-exit.component';

describe('ViewEmployeeListExitComponent', () => {
  let component: ViewEmployeeListExitComponent;
  let fixture: ComponentFixture<ViewEmployeeListExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeListExitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeListExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
