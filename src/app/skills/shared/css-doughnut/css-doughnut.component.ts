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
  private doughnutChartData:number[] = [27, 83];
  private doughnutChartType:string = 'doughnut';
  private doughnutChartColors: any[] = [
    { backgroundColor: ["#000fff", "#000000"]}
  ];

  // events
  private chartClicked(e:any):void {
    console.log(e);
  }

  private chartHovered(e:any):void {
    console.log(e);
  }
}
