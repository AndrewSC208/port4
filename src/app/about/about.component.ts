import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CarouselComponent } from '../shared/carousel/carousel.component';
import { TogglableTabsComponent } from '../shared/togglable-tabs/togglable-tabs.component';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [ CarouselComponent, TogglableTabsComponent, ROUTER_DIRECTIVES ],
})
export class AboutComponent implements OnInit {
	// about data - this will be pulled in from a service component at some point
	
	photo: string = 'https://res.cloudinary.com/drkmakxkk/image/upload/v1473486571/space3-bg_ku8qh5.jpg';

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
