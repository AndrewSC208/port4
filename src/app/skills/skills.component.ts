import { Component, OnInit } from '@angular/core';
import { HtmlDoughnutComponent } from './shared/html-doughnut/html-doughnut.component'

@Component({
  moduleId: module.id,
  selector: 'app-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['skills.component.css'],
  directives: [ HtmlDoughnutComponent ]
})

export class SkillsComponent implements OnInit {
	title = "Skills Section";
  constructor() {}

  ngOnInit() {
  }

}
