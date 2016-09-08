import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  photo: string = "https://res.cloudinary.com/drkmakxkk/image/upload/v1473223537/about-bg-dsk_p32zhw.png";
	title = "Portfolio";
	
  // need to make and intergace for this, and import from a different file
  // portfolioItems
  // data: This will soon be some type of data service. I like the idea of adding in the cms that I am working on.
  portfolioItems = [
    {
      "title"     : "Brandly",
      "imgUrl"    : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "sourceUrl" : "http://github.com/AndrewSC208/branded",
    },
    {
      "title"     : "Simple Biz",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473344633/simple_biz_xurizl.png",
      "url"       : "http://andrewmeilingsimplebiz.s3-website-us-west-2.amazonaws.com/",
      "sourceUrl" : "https://github.com/AndrewSC208/simple_biz",
    },
    {
      "title"     : "Tiny One",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473345035/tiny_one_e0x1it.png",
      "url"       : "http://andrewmeilingtinyonetheme.s3-website-us-west-2.amazonaws.com/",
      "sourceUrl" : "https://github.com/AndrewSC208/TinyOne",
    },
    {
      "title"     : "Two Of A Kind",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473345206/two_of_a_kind_nhiukm.png",
      "url"       : "http://andrewmeilingtwoofakind.s3-website-us-west-2.amazonaws.com/",
      "sourceUrl" : "https://github.com/AndrewSC208/two-of-a-kind",
    },
  ]   
  

  constructor() {

  }

  ngOnInit() {
  }

}
