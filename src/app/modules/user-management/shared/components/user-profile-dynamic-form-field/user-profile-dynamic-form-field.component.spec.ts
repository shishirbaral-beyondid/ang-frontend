import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDynamicFormFieldComponent } from './user-profile-dynamic-form-field.component';

describe('UserProfileDynamicFormFieldComponent', () => {
  let component: UserProfileDynamicFormFieldComponent;
  let fixture: ComponentFixture<UserProfileDynamicFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDynamicFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDynamicFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
