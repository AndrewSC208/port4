/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { JsDoughnutComponent } from './js-doughnut.component';

describe('Component: JsDoughnut', () => {
  it('should create an instance', () => {
    let component = new JsDoughnutComponent();
    expect(component).toBeTruthy();
  });
});
