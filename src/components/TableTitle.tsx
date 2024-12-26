import React from 'react';
import { Table } from 'lucide-react';

interface TableTitleProps {
  startDate: string;
  endDate: string;
}

export const TableTitle: React.FC<TableTitleProps> = ({ startDate, endDate }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Table className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Temperature Data Table</h2>
          <p className="text-sm text-gray-500">
            Showing records from {startDate} to {endDate}
          </p>
        </div>
      </div>
    </div>
  );
};