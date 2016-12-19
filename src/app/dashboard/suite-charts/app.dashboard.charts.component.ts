import { ChartModule } from 'angular2-highcharts';
import { Component } from '@angular/core';
import {SuiteChartOptions} from "./app.dashboard.charts.options";


@Component({
    selector: 'suite-chart',
    templateUrl: './app.dashboard.charts.template.html',
    styleUrls:['./app.dashboard.charts.css']
})
export class SuiteChartComponent {
    public options: Object;

    constructor(private chartOptions: SuiteChartOptions) {
        this.chartOptions.getOptions().subscribe((options)=>
        this.options=options);
    }
}