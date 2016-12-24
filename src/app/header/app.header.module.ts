import {NgModule} from '@angular/core';
import {HeaderComponent} from './app.header.component';
import {Dashboard, Report} from "./entity";
import {BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

@NgModule({
    exports:[HeaderComponent],
    imports:[BrowserModule, RouterModule],
    providers:[Dashboard, Report],
    declarations: [HeaderComponent]
})
export class HeaderModule{}