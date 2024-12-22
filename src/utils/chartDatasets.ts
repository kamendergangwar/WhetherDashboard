import { WeatherData } from '../types/weather';
import { ChartData } from 'chart.js';

export const createTemperatureDataset = (data: WeatherData): ChartData<'line'> => ({
  labels: data.time,
  datasets: [
    {
      label: 'Temperature (2m) Max',
      data: data.temperature_2m_max,
      borderColor: '#3B82F6',
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
    {
      label: 'Temperature (2m) Min',
      data: data.temperature_2m_min,
      borderColor: '#10B981',
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
    {
      label: 'Temperature (2m) Mean',
      data: data.temperature_2m_mean,
      borderColor: '#8B5CF6',
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
    {
      label: 'Apparent Temperature Max',
      data: data.apparent_temperature_max,
      borderColor: '#F59E0B',
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
    {
      label: 'Apparent Temperature Min',
      data: data.apparent_temperature_min,
      borderColor: '#EF4444',
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
    {
      label: 'Apparent Temperature Mean',
      data: data.apparent_temperature_mean,
      borderColor: '#EC4899',
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
  ],
});