import {Component, ElementRef, AfterViewChecked} from "@angular/core";

@Component({
    selector:'e2e-test-dashboard',
    templateUrl:'./app.dashboard.template.html',
    styleUrls: ['./app.dashboard.css']
})
export class DashboardComponent implements AfterViewChecked {
    constructor(private element:ElementRef){}

    ngAfterViewChecked(){
        var eles = this.element.nativeElement.getElementsByClassName('highcharts-credits');
        if(eles.length>0){
            for(let iterator=0; iterator<eles.length;iterator++){
               eles.item(iterator).setAttribute('style', "display:none")
            }
        }
    }
}