import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewBottlePage} from './new-bottle.page';

describe('NewBottlePage', () => {
  let component: NewBottlePage;
  let fixture: ComponentFixture<NewBottlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBottlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBottlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
