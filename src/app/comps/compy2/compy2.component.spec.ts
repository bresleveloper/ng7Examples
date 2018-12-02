import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compy2Component } from './compy2.component';

describe('Compy2Component', () => {
  let component: Compy2Component;
  let fixture: ComponentFixture<Compy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
