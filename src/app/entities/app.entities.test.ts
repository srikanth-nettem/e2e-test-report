import {IDuration} from './app.entities.duration';
import {IStep} from './app.entities.step';
import {IStatus} from './app.entities.status';

export interface ITest extends IDuration, IStatus {
    steps: IStep[]
}