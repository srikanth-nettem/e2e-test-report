import { Component } from '@angular/core';
import { INav, Dashboard, Report } from './entity';

@Component({
    selector: 'app-header',
    templateUrl: './app.header.template.html',
    styleUrls: ["./app.header.component.css"]
})
export class HeaderComponent {

    constructor(private dashboard: Dashboard, private report: Report) {
    }

    flags: boolean[] = [true, false, false];

    public brand: string = 'E2E Test Report'
    public navItems: INav[] = [this.dashboard, this.report];

    toggle(index: number): void {
        this.flags.forEach((flag, itr) => { 
           this.flags[itr]=false;
        });

        this.flags[index]=true;
    }
}