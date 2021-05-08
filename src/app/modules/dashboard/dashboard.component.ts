import { Component, OnInit } from '@angular/core';
import { Dictionary } from 'highcharts';
import { DashboardService } from '../dashboard.service';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart:any;
  cards: Array<number> = [];
  pie: Array<Object> = [];
  table = new MatTableDataSource<Object>([]);

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pie = this.dashboardService.pie();
    this.table = this.dashboardService.table();
  }

}
