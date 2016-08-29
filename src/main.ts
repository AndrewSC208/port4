import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import 'chartjs';
import 'rxjs/Rx';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
	appRouterProviders,
	disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  
])
.catch(err => console.error(err));

