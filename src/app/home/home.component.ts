import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit {
	// background image: TODO:  I NEED TO UPDATED THIS FOR MOBILE, AND COMPRESS THE IMAGE BIG TIME. BUT THE CDN IS WORKING. I MIGHT LIKE THE IDEA OF USING AWS FOR THE CND THAT IS NOT IMPORTANT NOW. 
	photo:string = "http://res.cloudinary.com/drkmakxkk/image/upload/v1473475916/home-bg_bcyhur.jpg";

  constructor() {}

  ngOnInit() {
  }

}
