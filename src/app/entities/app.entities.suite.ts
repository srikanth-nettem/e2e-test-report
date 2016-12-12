import {ITest, IStep} from './';
import {IDuration} from './app.entities.duration';
import {IName} from './app.entities.name';
import {IId} from './app.entities.id';

export interface ISuite extends IDuration, IName, IId {
    tests: ITest[]
}