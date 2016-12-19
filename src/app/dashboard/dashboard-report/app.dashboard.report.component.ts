import {Component, Input, Output, OnChanges} from "@angular/core";
import {ReportContext} from "../../common";

@Component({
    selector:'dashboard-report',
    templateUrl:'./app.dashboard.template.html'
})
export class DashboardReportComponent{
    @Input()
    suiteId:string;

    constructor(private reportContext:ReportContext){}

    suiteIdChange(event):void{
        this.suiteId=event;
    }
}