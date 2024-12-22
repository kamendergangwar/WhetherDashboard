import React from 'react';

export const TableHeader: React.FC = () => (
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Date</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        <div className="mb-1">Actual Temperature (2m)</div>
        <div className="grid grid-cols-3 gap-4 text-gray-400">
          <span>Max</span>
          <span>Min</span>
          <span>Mean</span>
        </div>
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        <div className="mb-1">Apparent Temperature</div>
        <div className="grid grid-cols-3 gap-4 text-gray-400">
          <span>Max</span>
          <span>Min</span>
          <span>Mean</span>
        </div>
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Temperature Range
      </th>
    </tr>
  </thead>
);