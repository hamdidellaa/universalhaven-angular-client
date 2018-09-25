import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeapplicationformComponent } from './homeapplicationform.component';

describe('HomeapplicationformComponent', () => {
  let component: HomeapplicationformComponent;
  let fixture: ComponentFixture<HomeapplicationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeapplicationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeapplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
