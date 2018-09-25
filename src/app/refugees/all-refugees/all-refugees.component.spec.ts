import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRefugeesComponent } from './all-refugees.component';

describe('AllRefugeesComponent', () => {
  let component: AllRefugeesComponent;
  let fixture: ComponentFixture<AllRefugeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRefugeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRefugeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
