import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compy1Component } from './compy1.component';

describe('Compy1Component', () => {
  let component: Compy1Component;
  let fixture: ComponentFixture<Compy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
