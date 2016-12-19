import {INav} from './app.header.entity.nav';
import {Injectable} from '@angular/core';

export class Report implements INav{
    public name: string = 'Report';
    public route: string = './report';
    public class: string = '';
}