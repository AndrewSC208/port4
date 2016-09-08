import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'js-doughnut',
  templateUrl: 'js-doughnut.component.html',
  styleUrls: ['js-doughnut.component.css'],
  directives: [ CHART_DIRECTIVES ]
})
export class JsDoughnutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  // Doughnut
  private doughnutChartData:number[] = [88, 12];
  private doughnutChartType:string = 'doughnut';
  private doughnutChartColors: any[] = [
    { backgroundColor: ["rgba(255,255,255, .75)", "rgba(255,255,255, .10)"]}
  ];
}
