import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ReportContext } from "../../common";
import { ISuite } from "../../entities";

@Component({
    selector: "dashboard-suites",
    templateUrl: './app.dashboard.suites.template.html'
})
export class SuitesComponent implements OnInit {
    suitesData: ISuite[];

    activeSuite:String;

    @Output('suiteId')
    suiteId: EventEmitter<String>;

    constructor(private reportContext: ReportContext) {
        this.suiteId = new EventEmitter<String>();
    }

    ngOnInit(): void {
        this.reportContext.getSuites().subscribe((data) => {
            this.suitesData = data;
            this.suiteId.emit(this.suitesData[0].id);
        });
    }

    changeSuite(suite: ISuite): void {
        this.activeSuite=suite.id;
        this.suiteId.emit(suite.id);
    }
}