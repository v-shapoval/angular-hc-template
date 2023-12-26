import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighchartsChartModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hc-angular';

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      animation: false,
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 3, 4, 5, 6, 10, 1],
        animation: false,
      },
      {
        type: "bar",
        data: [3, 3, 10, 4, 10, 6, 7, 1],
        animation: false,
      }
    ],
  };
}
