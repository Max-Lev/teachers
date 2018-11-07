export enum StudentsActionEnum {
    STUDENTS_INITIAL = '[STUDENTS] STUDENTS_INITIAL',
    STUDENTS_LOAD_ACTION = '[STUDENTS] STUDENTS_LOAD_ACTION',
    STUDENTS_LOAD_SUCCESS = '[STUDENTS] STUDENTS_LOAD_SUCCESS',
    STUDENTS_LOAD_FAIL = '[STUDENTS] STUDENTS_LOAD_FAIL',
};

export interface StudentsState {
    type: string;
    payload?: any;
};

export class StudentsInitialAction implements StudentsState {
    readonly type: string = StudentsActionEnum.STUDENTS_INITIAL;
    payload?: any;
    constructor() { }
};
export class StudentsLoadAction implements StudentsState {
    readonly type: string = StudentsActionEnum.STUDENTS_LOAD_ACTION;
    payload?: any;
    constructor(payload: any) {
        this.payload = payload;
    }
};
export class StudentsLoadSuccessAction implements StudentsState {
    readonly type: string = StudentsActionEnum.STUDENTS_LOAD_SUCCESS;
    payload?: any;
    constructor(payload: any) {
        this.payload = payload;
    }
};


export type StudentsActions = StudentsInitialAction
    | StudentsLoadAction
    | StudentsLoadSuccessAction