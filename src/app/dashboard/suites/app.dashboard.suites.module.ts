import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SuitesComponent} from "./app.dashboard.suites.component";
import {ReportContext} from "../../common";

@NgModule({
    exports:[SuitesComponent],
    imports:[BrowserModule],
    declarations:[SuitesComponent],
    providers:[ReportContext]
})
export class SuitesModule{
}