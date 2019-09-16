import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BottlesPage} from './bottles.page';

describe('BottlesPage', () => {
  let component: BottlesPage;
  let fixture: ComponentFixture<BottlesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
