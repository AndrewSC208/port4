import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MainNavComponent, HomeComponent],
})
export class AppComponent {
  title = "App component";
}
