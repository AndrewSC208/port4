import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'html-doughnut',
  templateUrl: 'html-doughnut.component.html',
  styleUrls: ['html-doughnut.component.css'],
  directives: [ CHART_DIRECTIVES ]
})

export class HtmlDoughnutComponent implements OnInit {

	constructor() {}

  ngOnInit() {
  }

	// Doughnut
  private doughnutChartData:number[] = [350, 450];
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
