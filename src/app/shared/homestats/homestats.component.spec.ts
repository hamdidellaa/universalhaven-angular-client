import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestatsComponent } from './homestats.component';

describe('HomestatsComponent', () => {
  let component: HomestatsComponent;
  let fixture: ComponentFixture<HomestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
