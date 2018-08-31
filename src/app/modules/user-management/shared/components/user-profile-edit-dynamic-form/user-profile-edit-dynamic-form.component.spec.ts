import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileEditDynamicFormComponent } from './user-profile-edit-dynamic-form.component';

describe('UserProfileEditDynamicFormComponent', () => {
  let component: UserProfileEditDynamicFormComponent;
  let fixture: ComponentFixture<UserProfileEditDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileEditDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileEditDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
