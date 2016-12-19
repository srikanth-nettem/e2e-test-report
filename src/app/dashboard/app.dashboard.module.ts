import {NgModule} from "@angular/core";
import {SuiteChartModule} from "./suite-charts";
import {TestChartModule} from "./test-charts";
import {SuitesModule} from "./suites"
import {DashboardComponent} from "./app.dashboard.component";
import {DashboardReportModule} from "./dashboard-report";

@NgModule({
    exports:[DashboardComponent],
    imports:[SuiteChartModule, TestChartModule, DashboardReportModule],
    declarations:[DashboardComponent]
})
export class DashboardModule{
}