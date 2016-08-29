import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MainNavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
