import {ChartModule} from 'angular2-highcharts';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SuiteChartComponent} from "./app.dashboard.charts.component";
import {SuiteChartOptions} from "./app.dashboard.charts.options";
import {ReportContext} from "../../common";

@NgModule({
    exports: [SuiteChartComponent],
    imports:[BrowserModule, ChartModule],
    declarations:[SuiteChartComponent],
    providers:[SuiteChartOptions, ReportContext]
})
export class SuiteChartModule{}