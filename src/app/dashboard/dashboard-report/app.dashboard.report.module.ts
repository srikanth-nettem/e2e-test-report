import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SuitesModule} from "../suites";
import {TestsModule} from "../tests";
import {DashboardReportComponent} from "./app.dashboard.report.component";
import {ReportContext} from "../../common";

@NgModule({
    exports:[DashboardReportComponent],
    imports:[BrowserModule, SuitesModule, TestsModule],
    declarations:[DashboardReportComponent],
    providers:[ReportContext]
})
export class DashboardReportModule{
}