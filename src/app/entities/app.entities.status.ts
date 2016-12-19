export enum Status {
    INFORMATION,
    PENDING,
    SKIP,
    PASS,
    FAIL,
    ERROR
}

export interface IStatus {
    state: Status
}