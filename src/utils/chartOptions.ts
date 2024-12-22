import { ChartOptions } from 'chart.js';

export const temperatureChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#1F2937',
      bodyColor: '#1F2937',
      borderColor: '#E5E7EB',
      borderWidth: 1,
      padding: 12,
      displayColors: true,
      callbacks: {
        label: (context) => `${context.dataset.label}: ${context.parsed.y}°C`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: '#F3F4F6',
      },
      ticks: {
        font: {
          size: 11,
        },
      },
    },
    y: {
      position: 'left',
      grid: {
        display: true,
        color: '#F3F4F6',
      },
      ticks: {
        callback: (value) => `${value}°C`,
        font: {
          size: 11,
        },
      },
    },
  },
};