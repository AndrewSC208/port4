import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MainNavComponent, AboutComponent, HomeComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = "App component";
}
