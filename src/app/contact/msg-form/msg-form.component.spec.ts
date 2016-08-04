/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MsgFormComponent } from './msg-form.component';

describe('Component: MsgForm', () => {
  it('should create an instance', () => {
    let component = new MsgFormComponent();
    expect(component).toBeTruthy();
  });
});
