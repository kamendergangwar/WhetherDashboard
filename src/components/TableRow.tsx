import React from 'react';
import { WeatherData } from '../types/weather';
import { formatTemperature, calculateTemperatureRange } from '../utils/formatters';

interface TableRowProps {
  date: string;
  index: number;
  data: WeatherData;
}

export const TableRow: React.FC<TableRowProps> = ({ date, index, data }) => {
  const { range, variation } = calculateTemperatureRange(
    data.temperature_2m_max[index],
    data.temperature_2m_min[index]
  );

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-red-600">{formatTemperature(data.temperature_2m_max[index])}</div>
          <div className="text-blue-600">{formatTemperature(data.temperature_2m_min[index])}</div>
          <div className="text-green-600">{formatTemperature(data.temperature_2m_mean[index])}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-orange-600">{formatTemperature(data.apparent_temperature_max[index])}</div>
          <div className="text-purple-600">{formatTemperature(data.apparent_temperature_min[index])}</div>
          <div className="text-pink-600">{formatTemperature(data.apparent_temperature_mean[index])}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <div className="flex items-center space-x-2">
          <span className="font-medium">{range}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            variation === 'High' ? 'bg-red-100 text-red-800' :
            variation === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {variation}
          </span>
        </div>
      </td>
    </tr>
  );
};