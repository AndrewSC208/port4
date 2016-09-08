import { Component, OnInit } from '@angular/core';
import { HtmlDoughnutComponent } from './shared/html-doughnut/html-doughnut.component'
import { CssDoughnutComponent } from './shared/css-doughnut/css-doughnut.component'
import { JsDoughnutComponent } from './shared/js-doughnut/js-doughnut.component'

@Component({
  moduleId: module.id,
  selector: 'app-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['skills.component.css'],
  directives: [ HtmlDoughnutComponent, CssDoughnutComponent, JsDoughnutComponent ]
})

export class SkillsComponent implements OnInit {
	title = "Skills Section";

  photo: string = 'https://res.cloudinary.com/drkmakxkk/image/upload/v1473262543/portfolio-bg-dsk_iu7yh3.png';

  constructor() {}

  ngOnInit() {
  }

}
