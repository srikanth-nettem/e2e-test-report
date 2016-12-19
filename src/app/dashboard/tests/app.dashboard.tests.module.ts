import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {TestsComponent} from "./app.dashboard.tests.component"

@NgModule({
    exports:[TestsComponent],
    imports:[BrowserModule],
    declarations:[TestsComponent]
})
export class TestsModule{}