import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kuis1Component } from './kuis1.component';

describe('Kuis1Component', () => {
  let component: Kuis1Component;
  let fixture: ComponentFixture<Kuis1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kuis1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kuis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
