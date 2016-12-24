import {Component, OnInit} from "@angular/core";
import {LogContext} from "./app.log.logContext";

@Component({
    selector: "app-logs",
    templateUrl:"./app.log.template.html"
})
export class LogComponent implements OnInit {
    public logs:string[];

    constructor(private logContext:LogContext) { }

    ngOnInit(){
        this.logContext.getLogs().subscribe((data)=>{
            this.logs=data;
        });
    }
}