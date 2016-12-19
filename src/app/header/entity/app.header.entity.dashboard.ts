import {INav} from './app.header.entity.nav';
import {Injectable} from '@angular/core';

@Injectable()
export class Dashboard implements INav{
    public name: string = "Dashboard";
    public route: string = "/dashboard";
    public class: string = "active"; 
}