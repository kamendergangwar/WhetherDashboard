import React from 'react';
import { RefreshCw, Loader2 } from 'lucide-react';

interface ControlButtonsProps {
  onFetch: () => void;
  onReset: () => void;
  loading: boolean;
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({ onFetch, onReset, loading }) => {
  const buttonClass = "px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center transition-colors duration-200 shadow-md";
  
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={onFetch}
        disabled={loading}
        className={`${buttonClass} bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500`}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
            Loading...
          </>
        ) : (
          'Fetch Weather Data'
        )}
      </button>
      
      <button
        onClick={onReset}
        disabled={loading}
        className={`${buttonClass} bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-400`}
      >
        <RefreshCw className="mr-2 h-5 w-5" />
        Reset
      </button>
    </div>
  );
}