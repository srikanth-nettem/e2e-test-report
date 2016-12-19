import {NgModule} from '@angular/core';
import {HeaderComponent} from './app.header.component';
import {Dashboard, Report} from "./entity";
import {BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports:[HeaderComponent],
    imports:[BrowserModule],
    providers:[Dashboard, Report],
    declarations: [HeaderComponent]
})
export class HeaderModule{}