import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "Rxjs";

@Injectable()
export class LogContext {
    constructor(private http: Http) { }

    getLogs(path: string = ""): Observable<string[]> {
        let deferred: any;

        this.http.get(path || './sample-logs.log')
            .subscribe((data) => {
                deferred.next(this.extractLogs(data.text()));
                deferred.complete();
            });

        return new Observable<string[]>((observer) => { deferred = observer });
    }

    private extractLogs(logs): string[] {
        let matches: any[] = [];
        let pattern = /(\[[\d:]*\])\s+([A-Z0-9\s]+)\s+([^\n]+)\n/g;
        let match:any=[], i=0;
        do {
            match = pattern.exec(logs);
            matches[i++] = match && match.shift() && match;
            console.log(match!==null);
        }while( match!== null);

        return matches;
    }
}