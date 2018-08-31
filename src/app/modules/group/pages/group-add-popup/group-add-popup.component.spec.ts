import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAddPopupComponent } from './group-add-popup.component';

describe('GroupAddPopupComponent', () => {
  let component: GroupAddPopupComponent;
  let fixture: ComponentFixture<GroupAddPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAddPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
