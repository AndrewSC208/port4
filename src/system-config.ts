// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'moment': 'vendor/moment/moment.js',
  'ng2-charts': 'vendor/ng2-charts',
  'chartjs': 'vendor/chart.js/dist/Chart.bundle.min.js',
  'color-name': 'vendor/color-name/index.js',
  'color-convert': 'vendor/color-convert/index.js',
  'chartjs-color': 'vendor/chartjs-color/dist/color.js',
  'chartjs-color-string': 'vendor/chartjs-color-string/color-string.js',
};

/** User packages configuration. */
const packages: any = {
  'moment':{ format: 'cjs' },
  'ng2-charts': { defaultExtension: 'js', main: 'ng2-charts.js' },
  'chartjs': { defaultExtension: 'js', format: 'cjs' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/shared/main-nav',
  'app/about',
  'app/home',
  'app/portfolio',
  'app/contact',
  'app/skills',
  'app/shared/carousel',
  'app/shared/togglable-tabs',
  'app/skills/shared/html-doughnut',
  'app/css-doughnut',
  'app/js-doughnut',
  'app/skills/shared/css-doughnut',
  'app/skills/shared/js-doughnut',
  'app/contact/msg-form',
  'app/shared/portfolio-item/portfolio-item',
  'app/shared/portfolio-item',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });



