import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHearderUserInfoComponent } from './top-hearder-user-info.component';

describe('TopHearderUserInfoComponent', () => {
  let component: TopHearderUserInfoComponent;
  let fixture: ComponentFixture<TopHearderUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHearderUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHearderUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
