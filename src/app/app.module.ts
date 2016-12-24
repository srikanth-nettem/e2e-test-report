import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderModule, HeaderComponent } from './header';
import { AppComponent } from './app.component';
import {DashboardModule, DashboardComponent} from './dashboard';
import {DashboardReportComponent} from './dashboard/dashboard-report'
import {LogModule, LogComponent} from "./log";
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: 'dashboard', component:  DashboardComponent },
  { path: 'report', component:  DashboardReportComponent },
  { path: 'logs', component: LogComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    LogModule,
    HttpModule,
    HeaderModule,
    DashboardModule
    ],
  bootstrap: [AppComponent]
})

export class AppModule {}
