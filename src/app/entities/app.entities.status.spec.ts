import { Status } from './app.entities.status';

describe('Status Enum: ', () => {
    var target: Status;
    
    it('INFORMATION should be a state', () => {
        expect(Status.INFORMATION).toBeDefined();
    });

    it('PASS should be a state', () => {
        expect(Status.PASS).toBeDefined();
    });

    it('FAIL should be a state', () => {
        expect(Status.FAIL).toBeDefined();
    });

    it('SKIP should be a state', () => {
        expect(Status.SKIP).toBeDefined();
    });

    it('PENDING should be a state', () => {
        expect(Status.PENDING).toBeDefined();
    });

    it('ERROR should be a state', () => {
        expect(Status.ERROR).toBeDefined();
    });
})
