import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusCardComponent } from './user-status-card.component';

describe('UserStatusCardComponent', () => {
  let component: UserStatusCardComponent;
  let fixture: ComponentFixture<UserStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
