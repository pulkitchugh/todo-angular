import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo-list/todo.service";
import * as Highcharts from 'highcharts';
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  hc: typeof Highcharts = Highcharts;

  chartOptions: {};

  completedTodoCount:number = 0;
  uncompletedTodoCount:number = 0;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.completedTodoCount = this.todoService.countCompletedTodos();
    this.uncompletedTodoCount = this.todoService.getTodos().length - this.completedTodoCount;

    this.chartOptions = {
      chart: {
      plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
    },
    title: {
      text: "Stats",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
          enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    exporting: {
      enabled: true,
    },
    credits: { enabled: false },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [{name: 'Completed Tasks',
          y: this.completedTodoCount,
          sliced: true,
          selected: true},{name: 'Uncompleted Tasks',
          y: this.uncompletedTodoCount}],
      },
    ],
  };

  HC_exporting(Highcharts);
  }

}
