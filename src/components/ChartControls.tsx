import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface MetricToggle {
  label: string;
  key: string;
  active: boolean;
}

interface ChartControlsProps {
  metrics: MetricToggle[];
  onToggleMetric: (key: string) => void;
}

export const ChartControls: React.FC<ChartControlsProps> = ({ metrics, onToggleMetric }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {metrics.map(({ label, key, active }) => (
        <button
          key={key}
          onClick={() => onToggleMetric(key)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors
            ${active 
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
        >
          {active ? <Eye size={16} /> : <EyeOff size={16} />}
          {label}
        </button>
      ))}
    </div>
  );
};