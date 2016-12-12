import {IStatus, Status} from './app.entities.status';
import {IDuration} from './app.entities.duration';
import {IName} from './app.entities.name';
import {IId} from './app.entities.id';

export interface IStep extends IDuration, IStatus, IName, IId {
}