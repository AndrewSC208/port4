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
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
