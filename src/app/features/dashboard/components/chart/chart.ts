import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { isPlatformBrowser } from '@angular/common';
import { text } from '@primeuix/themes/aura/inlinemessage';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'dashboard-chart',
  standalone: false,
  templateUrl: './chart.html',
  styleUrl: './chart.css'
})
export class Chart implements OnInit{

  date: Date | undefined;

  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  value: any;

  paymentOptions: any[] = [
      { name: '1D', value: '1D' },
      { name: '1S', value: '1S' },
      { name: '1M', value: '1M' },
      { name: '3M', value: '3M' },
      { name: '6M', value: '6M' },
      { name: '1A', value: '1A' },
      { name: '5A', value: '5A' }
  ];

  constructor(private cd: ChangeDetectorRef ) {}

  ngOnInit() {
      this.initChart();
      
  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      label: 'First Dataset',
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                      tension: 0.4
                  },
                  {
                      label: 'Second Dataset',
                      data: [28, 48, 40, 19, 86, 27, 90],
                      fill: false,
                      borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                      tension: 0.4
                  }
              ]
          };

          this.options = {
              maintainAspectRatio: false,
              aspectRatio: 0.6,
              plugins: {
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  },
                  y: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  }
              }
          };
          this.cd.markForCheck()
      }
  }


}
