import React from 'react';
import { Line } from 'react-chartjs-2';
import { WeatherData } from '../types/weather';
import { setupChartDefaults } from '../utils/chartSetup';
import { temperatureChartOptions } from '../utils/chartOptions';
import { ChartControls } from './ChartControls';
import { useChartMetrics } from '../hooks/useChartMetrics';

setupChartDefaults();

interface WeatherChartProps {
  data: WeatherData;
}

export const WeatherChart: React.FC<WeatherChartProps> = ({ data }) => {
  const { metrics, toggleMetric, chartData } = useChartMetrics(data);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Temperature Data for {data.time[0]} to {data.time[data.time.length - 1]}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            52.52°N 13.42°E 38m above sea level
          </p>
        </div>
        <ChartControls metrics={metrics} onToggleMetric={toggleMetric} />
        <div className="relative w-full" style={{ height: '400px' }}>
          <Line
            data={chartData}
            options={temperatureChartOptions}
          />
        </div>
      </div>
    </div>
  );
};