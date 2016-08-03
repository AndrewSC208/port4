import { Component, OnInit } from '@angular/core';

import { CarouselComponent } from '../shared/carousel/carousel.component';
import { TogglableTabsComponent } from '../shared/togglable-tabs/togglable-tabs.component';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [ CarouselComponent, TogglableTabsComponent ],
})
export class AboutComponent implements OnInit {
	// about data - this will be pulled in from a service component at some point
	private about = {
		// add all about page data here!
		title : 'About Page',
	};

	// this is the logic for image slider:
	imgSlider() {

	}

  constructor() {}

  ngOnInit() {
  }

}
