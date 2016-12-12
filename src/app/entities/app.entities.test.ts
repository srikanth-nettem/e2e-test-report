import {IDuration} from './app.entities.duration';
import {IStep} from './app.entities.step';
import {IStatus} from './app.entities.status';
import {IId} from './app.entities.id';

export interface ITest extends IDuration, IStatus, IId {
    steps: IStep[]
}