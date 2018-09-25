import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecallforhelpComponent } from './homecallforhelp.component';

describe('HomecallforhelpComponent', () => {
  let component: HomecallforhelpComponent;
  let fixture: ComponentFixture<HomecallforhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecallforhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecallforhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
