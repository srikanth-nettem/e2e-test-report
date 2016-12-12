import {ITest} from './app.entities.test';
import {IDuration} from './app.entities.duration';
import {IStep} from './app.entities.step';
import {IName} from './app.entities.name';

export interface ISuite extends IDuration, IName {
    tests: ITest[]
}