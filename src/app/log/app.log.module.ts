import {NgModule} from "@angular/core";
import {BrowserModule } from '@angular/platform-browser';
import {LogComponent} from "./app.log.component";
import {LogContext} from "./app.log.logContext";

@NgModule({
    exports:[LogComponent],
    imports:[BrowserModule],
    providers:[LogContext],
    declarations: [LogComponent]
})
export class LogModule{}