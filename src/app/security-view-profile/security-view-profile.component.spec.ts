import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityViewProfileComponent } from './security-view-profile.component';

describe('SecurityViewProfileComponent', () => {
  let component: SecurityViewProfileComponent;
  let fixture: ComponentFixture<SecurityViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityViewProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
