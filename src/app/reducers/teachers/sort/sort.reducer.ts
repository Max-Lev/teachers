import { Action } from '@ngrx/store';

export enum SortActionsEnum {
  SORT_DEFAULT = '[SORT] DEFAULT',
  SORT_ASC = '[SORT] ASC',
  SORT_DSC = '[SORT] DSC'
}

export interface SortAction extends Action {
  type: string;
  column: any;
  payload: any;
}

export interface SortState {
  type: string;
  column: any;
  payload: any;
};

export const SortDefaultState: SortState = {
  type: SortActionsEnum.SORT_DEFAULT,
  column: '',
  payload: []
};
export class SortAscState implements SortState {
  readonly type: string = SortActionsEnum.SORT_ASC;
  column: any;
  payload: any = [];
  constructor(column: string, payload: any) {
    this.column = column;
    this.payload = payload;
  }
};
export class SortDscState implements SortState {
  readonly type: string = SortActionsEnum.SORT_DSC;
  column: any;
  payload: any = [];
  constructor(column: string, payload: any) {
    this.column = column;
    this.payload = payload;
  }
};

export function SortReducer(state = SortDefaultState, action: SortAction): SortState {
  
  switch (action.type) {
    case SortActionsEnum.SORT_ASC:
      const asc = {
        ...action, ...state,
        column: action.column,
        type: action.type,
        payload: sort(action)
      }
      return asc;
    case SortActionsEnum.SORT_DSC:
      const dsc = {
        ...action, ...state,
        column: action.column,
        type: action.type,
        payload: sort(action)
      }
      return dsc;
    default:
      return state;
  }
}

let prevColName: string = null;
let prevColSort: number = 0;
function sort(action: SortAction): any[] {

  const dataSource: any[] = [...action.payload];

  if (prevColName === null) {

    prevColName = action.column.header;
    prevColSort = 1;
    sortingMode(dataSource, action);
  } else {
    if (prevColName === action.column.header) {
      if (prevColSort === 0) {

        prevColSort = 1;
        sortingMode(dataSource, action);
      }
      else if (prevColSort === 1) {

        prevColSort = 0;
        sortingMode(dataSource, action);
      }
    } else {

      prevColName = action.column.header;
      prevColSort = 1;
      sortingMode(dataSource, action);
    }
  };
  // dataSource.map(col => { return col = (col.header === action.column.header) ? Object.assign(col, { sort: true }) : Object.assign(col, { sort: false }); });
  return dataSource;
};

function sortingMode(dataSource: any[], action: any): any[] {
  if (action.type === SortActionsEnum.SORT_ASC) {
    return dataSource.sort((itemA, itemB) => {
      return (itemA[action.column.header] > itemB[action.column.header]) ? 1 : -1;
    });
  } else {
    return dataSource.sort((itemA, itemB) => {
      return (itemA[action.column.header] < itemB[action.column.header]) ? 1 : -1;
    });
  }
};