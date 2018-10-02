import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week5Component } from './week5.component';

describe('Week5Component', () => {
  let component: Week5Component;
  let fixture: ComponentFixture<Week5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
