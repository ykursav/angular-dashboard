import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Dictionary } from 'highcharts';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() dataSource = new MatTableDataSource<Object>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
