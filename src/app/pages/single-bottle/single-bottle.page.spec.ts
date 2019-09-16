import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleBottlePage} from './single-bottle.page';

describe('SingleBottlePage', () => {
  let component: SingleBottlePage;
  let fixture: ComponentFixture<SingleBottlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBottlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBottlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
