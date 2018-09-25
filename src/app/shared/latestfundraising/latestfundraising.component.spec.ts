import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestfundraisingComponent } from './latestfundraising.component';

describe('LatestfundraisingComponent', () => {
  let component: LatestfundraisingComponent;
  let fixture: ComponentFixture<LatestfundraisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestfundraisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestfundraisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
