import React from 'react';

interface CoordinateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min: number;
  max: number;
}

export const CoordinateInput: React.FC<CoordinateInputProps> = ({ label, value, onChange, min, max }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= min && Number(value) <= max)) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        step="0.000001"
        min={min}
        max={max}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};