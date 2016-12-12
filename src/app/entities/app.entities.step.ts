import {IStatus, Status} from './app.entities.status';
import {IDuration} from './app.entities.duration';
import {IName} from './app.entities.name';

export interface IStep extends IDuration, IStatus, IName {
}