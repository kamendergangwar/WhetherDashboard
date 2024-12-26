import React from 'react';
import { WeatherData } from '../types/weather';
import { TableTitle } from './TableTitle';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TablePagination } from './TablePagination';
import { useTablePagination } from '../hooks/useTablePagination';

interface WeatherTableProps {
  data: WeatherData;
}

export const WeatherTable: React.FC<WeatherTableProps> = ({ data }) => {
  const { currentPage, rowsPerPage, totalPages, startIndex, endIndex, setCurrentPage, setRowsPerPage } = 
    useTablePagination(data.time.length);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <TableTitle 
        startDate={data.time[0]} 
        endDate={data.time[data.time.length - 1]} 
      />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {data.time.slice(startIndex, endIndex).map((date, index) => (
              <TableRow
                key={date}
                date={date}
                index={startIndex + index}
                data={data}
              />
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};