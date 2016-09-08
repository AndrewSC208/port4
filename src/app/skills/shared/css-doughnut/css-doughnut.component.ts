import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'css-doughnut',
  templateUrl: 'css-doughnut.component.html',
  styleUrls: ['css-doughnut.component.css'],
  directives: [ CHART_DIRECTIVES ]
})
export class CssDoughnutComponent implements OnInit {
	constructor() {}

  ngOnInit() {
  }

	// Doughnut
  private doughnutChartData:number[] = [67, 33];
  private doughnutChartType:string = 'doughnut';
  private doughnutChartColors: any[] = [
    { backgroundColor: ["rgba(255,255,255, .75)", "rgba(255,255,255, .10)"]}
  ];

}
