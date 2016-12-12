import { IReport, ITest, ISuite, IStep } from '../entities';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportContext {

    private report: IReport;

    constructor(private http: Http) { }

    private getReport(path: string): Observable<IReport> {
        var url: string = path || './sample-data.json';
        return this.http.get(url).map(res => {
            this.report = <IReport>res.json();
            return this.report;
        });
    }

    private fetch<T>(callback: (arg: IReport) => T): T {
        if (this.report) {
            return callback(this.report);
        }

        this.getReport('').subscribe((report) => {
            return callback(report);
        });
    }

    getSuites(): ISuite[] {
        return this.fetch<ISuite[]>((report) => {
            return report.suites;
        });
    }

    getSuite(suiteId: string): ISuite {
        return this.fetch<ISuite>((report) => {
            let target: ISuite;

            report.suites.forEach((suite) => {
                if (suite.id === suiteId) {
                    target = suite;
                }
            })

            return target;
        });
    }

    getTests(suiteId: string): ITest[] {
        return this.fetch<ITest[]>((report) => {

            let tests: ITest[];

            report.suites.forEach((suite) => {
                if (suite.id === suiteId) {
                    tests = suite.tests;
                }
            })

            return tests;
        });
    }

    getTest(testId: string): ITest {
        return this.fetch<ITest>((report) => {

            let target: ITest;

            report.suites.forEach((suite) => {
                suite.tests.forEach((test) => {
                    if (test.id === testId) {
                        target = test;
                        return;
                    }
                });
                if (target) {
                    return;
                }
            });

            return target;
        });
    }

    getSteps(testId: string): IStep[] {

        return this.fetch<IStep[]>((report) => {
            let target: IStep[];

            report.suites.forEach((suite) => {
                suite.tests.forEach((test) => {
                    if (test.id === testId) {
                        target = test.steps;
                        return;
                    }
                });
                if (target) {
                    return;
                }
            });

            return target;
        });
    }
}
