import { StudentsState, StudentsInitialAction, StudentsActionEnum, StudentsActions } from './students.actions';

export function StudetnsReducer(state: StudentsState = new StudentsInitialAction(), action: StudentsActions): StudentsState {
    switch (action.type) {
        case StudentsActionEnum.STUDENTS_LOAD_ACTION:
            const students_load = {
                ...state, ...action,
                payload: action.payload
            }
            return students_load;
        case StudentsActionEnum.STUDENTS_LOAD_SUCCESS:
            const students_load_success = {
                ...state, ...action,
                payload: action.payload
            }
            return students_load_success;
        default:
            return state;
    }
}