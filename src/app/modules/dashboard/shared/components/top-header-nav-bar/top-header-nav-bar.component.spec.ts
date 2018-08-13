import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderNavBarComponent } from './top-header-nav-bar.component';

describe('TopHeaderNavBarComponent', () => {
  let component: TopHeaderNavBarComponent;
  let fixture: ComponentFixture<TopHeaderNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeaderNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
