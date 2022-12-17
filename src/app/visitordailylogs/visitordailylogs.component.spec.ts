import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordailylogsComponent } from './visitordailylogs.component';

describe('VisitordailylogsComponent', () => {
  let component: VisitordailylogsComponent;
  let fixture: ComponentFixture<VisitordailylogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitordailylogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitordailylogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
