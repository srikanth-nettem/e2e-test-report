import {IDuration} from './app.entities.duration';
import {ISuite} from './app.entities.suite';

export interface IReport extends IDuration {
    Suites:ISuite[]
}