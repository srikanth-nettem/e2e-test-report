import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderModule, HeaderComponent } from './header';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    DashboardModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
