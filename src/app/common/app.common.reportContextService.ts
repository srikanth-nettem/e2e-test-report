import { IReport, ITest, ISuite, IStep } from '../entities';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportContext {

    private report: IReport;

    constructor(private http: Http) { }

    getReport(path: string): Observable<IReport> {
        var url: string = path || './sample-data.json';
        return this.http.get(url).map(res => {
            this.report = <IReport>res.json();
            return this.report;
        });
    }

    getSuites(): ISuite[] {
        return null;
    }

    getSuite(suiteId: number): ISuite {
        return null;
    }

    getTests(suiteId: number): ITest[] {
        return null;
    }

    getTest(testId: number): ITest {
        return null;
    }

    getSteps(testId: number): IStep[] {
        return null;
    }
}
