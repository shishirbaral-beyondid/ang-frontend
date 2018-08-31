import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileGroupComponent } from './user-profile-group.component';

describe('UserProfileGroupComponent', () => {
  let component: UserProfileGroupComponent;
  let fixture: ComponentFixture<UserProfileGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
