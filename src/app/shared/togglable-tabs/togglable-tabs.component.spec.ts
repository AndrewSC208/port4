/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TogglableTabsComponent } from './togglable-tabs.component';

describe('Component: TogglableTabs', () => {
  it('should create an instance', () => {
    let component = new TogglableTabsComponent();
    expect(component).toBeTruthy();
  });
});
