import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  photo: string = 'https://res.cloudinary.com/drkmakxkk/image/upload/v1473262543/portfolio-bg-dsk_iu7yh3.png';
	title = "Portfolio";
	
  // need to make and intergace for this, and import from a different file
  // portfolioItems
  // data: This will soon be some type of data service. I like the idea of adding in the cms that I am working on.
  portfolioItems = [
    {
      "title"     : "Brandly",
      "imgUrl"     : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "sourceUrl" : "http://github.com/AndrewSC208/branded",
    },
    {
      "title"     : "Brandly",
      "imgUrl"     : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "sourceUrl" : "http://github.com/AndrewSC208/branded",
    },
    {
      "title"     : "Brandly",
      "imgUrl"     : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "sourceUrl" : "http://github.com/AndrewSC208/branded",
    },
    {
      "title"     : "Brandly",
      "imgUrl"     : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "sourceUrl" : "http://github.com/AndrewSC208/branded",
    },
  ]   
  

  constructor() {

  }

  ngOnInit() {
  }

}
