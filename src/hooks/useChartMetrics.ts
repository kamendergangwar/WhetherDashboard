import { useState, useMemo } from 'react';
import { WeatherData } from '../types/weather';
import { ChartData } from 'chart.js';

const defaultMetrics = [
  { key: 'temp_max', label: 'Temperature Max', color: '#3B82F6' },
  { key: 'temp_min', label: 'Temperature Min', color: '#10B981' },
  { key: 'temp_mean', label: 'Temperature Mean', color: '#8B5CF6' },
  { key: 'apparent_max', label: 'Apparent Max', color: '#F59E0B' },
  { key: 'apparent_min', label: 'Apparent Min', color: '#EF4444' },
  { key: 'apparent_mean', label: 'Apparent Mean', color: '#EC4899' },
];

export const useChartMetrics = (data: WeatherData) => {
  const [activeMetrics, setActiveMetrics] = useState<Set<string>>(
    new Set(defaultMetrics.map(m => m.key))
  );

  const toggleMetric = (key: string) => {
    setActiveMetrics(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const chartData = useMemo((): ChartData<'line'> => {
    const getDataset = (key: string) => {
      switch (key) {
        case 'temp_max': return data.temperature_2m_max;
        case 'temp_min': return data.temperature_2m_min;
        case 'temp_mean': return data.temperature_2m_mean;
        case 'apparent_max': return data.apparent_temperature_max;
        case 'apparent_min': return data.apparent_temperature_min;
        case 'apparent_mean': return data.apparent_temperature_mean;
        default: return [];
      }
    };

    return {
      labels: data.time,
      datasets: defaultMetrics
        .filter(metric => activeMetrics.has(metric.key))
        .map(metric => ({
          label: metric.label,
          data: getDataset(metric.key),
          borderColor: metric.color,
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
        })),
    };
  }, [data, activeMetrics]);

  const metrics = defaultMetrics.map(metric => ({
    ...metric,
    active: activeMetrics.has(metric.key),
  }));

  return {
    metrics,
    toggleMetric,
    chartData,
  };
};