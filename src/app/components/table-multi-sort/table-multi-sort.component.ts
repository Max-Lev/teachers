import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { carsData } from './cars-data';
import { Table } from 'primeng/table';
import { SortMeta } from 'primeng/components/common/sortmeta';

export interface SortEvent {
  data?: any[];
  mode?: string;
  field?: string;
  order?: number;
  multiSortMeta?: SortMeta[];
};

export interface ICars {
  field: string;
  header: string;
};

@Component({
  selector: 'app-table-multi-sort',
  templateUrl: './table-multi-sort.component.html',
  styleUrls: ['./table-multi-sort.component.scss']
})
export class TableMultiSortComponent implements OnInit, AfterViewInit {

  cols: ICars[] = [];

  cars: any = carsData;

  multiSortMeta: any[] = [];

  @ViewChild(Table) table: Table;

  constructor() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  };

  ngOnInit() {
    // this.multiSortMeta.push({ field: 'name', order: 1 });
    // this.multiSortMeta.push({ field: 'year', order: -1 });
  };

  ngAfterViewInit(): void {

  };

  // _multipleSort(sortEvent: SortEvent) {
  //   this._singleSort(sortEvent);
  // };

  customSortHandler(sortEvent: SortEvent) {
    console.log('customSortHandler - sortMetaEvent: ', sortEvent);
    if (sortEvent.multiSortMeta.length === 1) {
      this._singleSort(sortEvent);
    }
    else if (sortEvent.multiSortMeta.length > 1) {
      this._multipleSort(sortEvent)
    }
  };

  _multipleSort(sortEvent: SortEvent) {
    console.log('multiple fn: ', sortEvent)
    sortEvent.multiSortMeta.map(col => {
      this._singleSortByField(col, sortEvent.data)
    });
  };
  _singleSortByField({ field, order }, data: any[]) {

    if (order === 1) {
      console.log('1: ', field, order)
      data.sort((a, b) => {
        debugger
        if (typeof a == 'string' || a instanceof String) {
          if (a.localeCompare && (a != b)) {
            return a[field].localeCompare(b[field]);
          }
        } else {
          return (a[field] > b[field]) ? 1 : -1;
        }
      })
    } else if (order === -1) {
      console.log('-1: ', field, order)
      data.sort((a, b) => {
        debugger
        if (typeof a == 'string' || a instanceof String) {
          if (a.localeCompare && (a != b)) {
            return a[field].localeCompare(a[field]);
          }
        } else {
          return (a[field] < b[field]) ? 1 : -1;
        }
      })
    }

  };

  ///////////////////
  _singleSort(sortEvent: SortEvent): any[] {
    const field = sortEvent.multiSortMeta[0].field;
    const order = sortEvent.multiSortMeta[0].order;
    console.log('field: ', field, 'order: ', order);
    return (order === 1) ? this.asc(sortEvent.data, field) : this.dsc(sortEvent.data, field);
  };

  asc(data: any[], field: string): any[] {
    console.log('data asc: ', data, field)
    return data.sort((a, b) => {
      return (a[field].toString() > b[field].toString()) ? 1 : -1;
    });
  };

  dsc(data: any[], field: string): any[] {
    console.log('data dsc: ', data, field)
    return data.sort((a, b) => {
      return (a[field].toString() < b[field].toString()) ? 1 : -1;
    });
  };


};


    // // console.log(this.table);
    // sortEvent.data.sort((data1, data2) => {
    //   let value1: string = data1[sortEvent.multiSortMeta[0].field];
    //   let fieldA = sortEvent.multiSortMeta[0].field;
    //   let fieldB = null;
    //   let value2 = null;
    //   let result = null;

    //   if (this.table.multiSortMeta.length > 1) {
    //     value2 = data2[sortEvent.multiSortMeta[1].field];
    //     fieldB = sortEvent.multiSortMeta[1].field;
    //   }
    //   if (value1 == null && value2 != null) {
    //     debugger;
    //     sortEvent.data = this._singleSort(sortEvent);
    //     result = -1;
    //   }
    //   else if (value1 != null && value2 == null) {
    //     // debugger;
    //     sortEvent.data = this._singleSort(sortEvent);
    //     result = 1;
    //   }
    //   // else if (value1 == null && value2 == null) {
    //   //   debugger;
    //   //   result = 0;
    //   // }
    //   // else if (typeof value1 === 'string' && typeof value2 === 'string') {
    //   //   debugger;
    //   //   result = value1.localeCompare(value2);
    //   // }
    //   // else {
    //   //   debugger
    //   //   result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
    //   // }
    //   else {
    //     sortEvent.data = this._multipleSort(sortEvent);
    //   }

    //   return result;
    // });


// event.data.sort((data1, data2) => {
//   let value1 = data1[event.field];
//   let value2 = data2[event.field];
//   let result = null;
//   debugger;

//   if (value1 == null && value2 != null)
//     result = -1;
//   else if (value1 != null && value2 == null)
//     result = 1;
//   else if (value1 == null && value2 == null)
//     result = 0;
//   else if (typeof value1 === 'string' && typeof value2 === 'string')
//     result = value1.localeCompare(value2);
//   else
//     result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

//   return (event.order * result);
// });


