import {Component} from '@angular/core';
import {INav, Dashboard, Report} from './entity';

@Component({
    selector:'app-header',
    templateUrl: './app.header.template.html'
})
export class HeaderComponent {

    constructor(private dashboard: Dashboard, private report: Report) {
    }

    public brand:string = 'E2E Test Report'
    public navItems: INav[] = [this.dashboard, this.report];
}