import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedonationComponent } from './homedonation.component';

describe('HomedonationComponent', () => {
  let component: HomedonationComponent;
  let fixture: ComponentFixture<HomedonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
