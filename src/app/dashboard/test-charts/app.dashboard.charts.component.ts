import { ChartModule } from 'angular2-highcharts';
import { Component } from '@angular/core';
import {TestChartOptions} from "./app.dashboard.charts.options";


@Component({
    selector: 'test-chart',
    templateUrl: './app.dashboard.charts.template.html'
})
export class TestChartComponent {
    public options: Object;

    constructor(private chartOptions: TestChartOptions) {
        this.chartOptions.getOptions().subscribe((options)=>
        this.options=options);
    }
}