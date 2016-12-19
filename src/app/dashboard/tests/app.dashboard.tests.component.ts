import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ReportContext } from "../../common";
import { ITest } from "../../entities";

@Component({
    selector: 'dashboard-tests',
    templateUrl: './app.dashboard.tests.template.html'
})
export class TestsComponent implements OnChanges {
    @Input('suiteId')
    suiteId: string;

    testsData: ITest[];

    constructor(private reportContext: ReportContext) { }

    private getTests(suiteId) {
        this.reportContext.getTests(suiteId).subscribe((data) => {
            this.testsData = data;
        });
    }

    ngOnChanges(changes: any): void {
        this.getTests(changes["suiteId"].currentValue);
    }
}