import { WeatherData } from '../types/weather';
import { ChartData, ChartOptions } from 'chart.js';

const createChartOptions = (title: string): ChartOptions<'line'> => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: true,
      labels: {
        boxWidth: 20,
        padding: 10,
        font: {
          size: 12
        }
      }
    },
    title: {
      display: false // Removed since we have an h3 title
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 45,
        minRotation: 45,
        autoSkip: true,
        maxTicksLimit: 10,
        font: {
          size: 10
        }
      }
    },
    y: {
      display: true,
      grid: {
        color: 'rgba(0,0,0,0.05)'
      },
      ticks: {
        font: {
          size: 10
        }
      }
    }
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  elements: {
    point: {
      radius: 2,
      hoverRadius: 4
    },
    line: {
      tension: 0.3
    }
  }
});

export const chartConfig = (data: WeatherData): {
  actualTempConfig: ChartData<'line'> & { options: ChartOptions<'line'> };
  apparentTempConfig: ChartData<'line'> & { options: ChartOptions<'line'> };
} => {
  const actualTempConfig: ChartData<'line'> & { options: ChartOptions<'line'> } = {
    labels: data.time,
    datasets: [
      {
        label: 'Maximum Temperature',
        data: data.temperature_2m_max,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.1,
      },
      {
        label: 'Minimum Temperature',
        data: data.temperature_2m_min,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.1,
      },
      {
        label: 'Mean Temperature',
        data: data.temperature_2m_mean,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.1,
      },
    ],
    options: createChartOptions('Actual Temperature Trends'),
  };

  const apparentTempConfig: ChartData<'line'> & { options: ChartOptions<'line'> } = {
    labels: data.time,
    datasets: [
      {
        label: 'Maximum Apparent Temperature',
        data: data.apparent_temperature_max,
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.1,
      },
      {
        label: 'Minimum Apparent Temperature',
        data: data.apparent_temperature_min,
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.1,
      },
      {
        label: 'Mean Apparent Temperature',
        data: data.apparent_temperature_mean,
        borderColor: 'rgb(236, 72, 153)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.1,
      },
    ],
    options: createChartOptions('Apparent Temperature Trends'),
  };

  return { actualTempConfig, apparentTempConfig };
};