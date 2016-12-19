import {ChartModule} from 'angular2-highcharts';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TestChartComponent} from "./app.dashboard.charts.component";
import {TestChartOptions} from "./app.dashboard.charts.options";
import {ReportContext} from "../../common";

@NgModule({
    exports: [TestChartComponent],
    imports:[BrowserModule, ChartModule],
    declarations:[TestChartComponent],
    providers:[TestChartOptions, ReportContext]
})
export class TestChartModule{}