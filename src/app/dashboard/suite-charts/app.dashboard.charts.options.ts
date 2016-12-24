import { Injectable } from '@angular/core';
import { ReportContext } from '../../common';
import { Status, ISuite } from '../../entities';
import { Observable } from 'rxjs/Observable';

interface ISeries {
    name: String,
    data: Number[]
}

@Injectable()
export class SuiteChartOptions {
    constructor(private reportContext: ReportContext) {
    }

    private categories: Status[] = [Status.PASS, Status.FAIL, Status.ERROR, Status.SKIP];

    private options: any = {
        chart: {
            height: 300,
            width:500,
            type: 'column'
        },
        title: {
            text: 'SUITES'
        },
        xAxis: {
            categories: this.categories.map((category) => Status[category])
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Test Suits'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: 'white'
                }
        }
        },
        series: []
    };

    getOptions(): Observable<any> {
        let deferred;

        this.getSeries().subscribe((data)=>{
            this.options.series = data;
            deferred.next(this.options);
            deferred.complete();
        });

        return new Observable((observer)=> deferred=observer);
        
    }

    private getSeries(): Observable<ISeries[]> {
        let deferred;
        this.reportContext.getSuites().subscribe((suites)=>{
             let seriesData: ISeries[]=[];
            suites.forEach((suite) => {
            let seriesDataItem: ISeries = { name: suite.name, data: [] };
            this.categories.forEach((category) => {
                seriesDataItem.data.push(this.getSeriesData(suite, category))
            });
            seriesData.push(seriesDataItem);
            deferred.next(seriesData); 
            deferred.complete();});
            });
        return new Observable<ISeries[]>((observer)=> deferred = observer);
    }

    private getSeriesData(suite: ISuite, category: Status): Number {
        return suite.tests.filter((test) => {
        return test.state.toString().toLowerCase() === Status[category].toLowerCase()
        }
        ).length;
    }
}