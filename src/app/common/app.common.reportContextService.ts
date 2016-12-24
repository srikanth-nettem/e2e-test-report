import { IReport, ITest, ISuite, IStep } from '../entities';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportContext {

    private report: IReport;

    constructor(private http: Http) {
    }

    private getReport(path: string): Observable<IReport> {
        var url: string = path || './sample-data.json';
        return this.http.get(url).map(res => {
            this.report = <IReport>res.json();
            return this.report;
        });
    }

    private fetch<T>(callback: (arg: IReport) => T): Observable<T> {
        let deferred;

        // if (this.report) {
        //     return new Observable(observer => { observer.next(callback(this.report)); observer.complete();});
        // }

        this.getReport('').subscribe((report) => {
            deferred.next(callback(report));
            deferred.complete();
        });

        return new Observable<T>(observer => { deferred = observer });
    }

    private find<T>(args: T[], callback: (arg: T) => boolean): T {
        return args.find((arg) => callback(arg));
    }

    getSuites(): Observable<ISuite[]> {
        return this.fetch<ISuite[]>((report) => {
            return report.suites;
        });
    }

    getSuite(suiteId: string): Observable<ISuite> {
        return this.fetch<ISuite>((report) => {
            return report && report.suites && this.find<ISuite>(report.suites, (suite) => suite.id == suiteId)
        });
    }

    getTests(suiteId: string): Observable<ITest[]> {
        return this.fetch<ITest[]>((report) => {
            let suite = report && report.suites && this.find<ISuite>(report.suites, (suite) => suite.id == suiteId);
            return suite && suite.tests;
        });
    }

    getTest(testId: string): Observable<ITest> {

        return this.fetch<ITest>((report) => {

            if (!report || !report.suites) {
                return null;
            }

            let target: ITest;

            report.suites.forEach((suite) => {
                target = suite && suite.tests && this.find<ITest>(suite.tests, (test) => test.id == testId);
                if (target) {
                    return;
                }
            });

            return target;
        });
    }

    getSteps(testId: string): Observable<IStep[]> {

        return this.fetch<IStep[]>((report) => {
            if (!this.report || !report.suites) {
                return null;
            }

            let target: ITest;

            report.suites.forEach((suite) => {
                target = suite && suite.tests && this.find<ITest>(suite.tests, (test) => test.id == testId);
                if (target) {
                    return;
                }
            });

            return target && target.steps;
        });
    }
}
