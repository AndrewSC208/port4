import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HtmlDoughnutComponent } from './shared/html-doughnut/html-doughnut.component'
import { CssDoughnutComponent } from './shared/css-doughnut/css-doughnut.component'
import { JsDoughnutComponent } from './shared/js-doughnut/js-doughnut.component'

@Component({
  moduleId: module.id,
  selector: 'app-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['skills.component.css'],
  directives: [ HtmlDoughnutComponent, CssDoughnutComponent, JsDoughnutComponent, ROUTER_DIRECTIVES]
})

export class SkillsComponent implements OnInit {
	title = "Skills Section";

  photo: string = 'https://res.cloudinary.com/drkmakxkk/image/upload/v1473479255/space2-bg_lztkmp.jpg';

  constructor() {}

  ngOnInit() {
  }

}
