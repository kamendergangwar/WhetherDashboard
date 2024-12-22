import React, { useState } from 'react';
import { Thermometer } from 'lucide-react';
import { format, subMonths } from 'date-fns';
import { CoordinateInput } from './components/CoordinateInput';
import { DateInput } from './components/DateInput';
import { WeatherChart } from './components/WeatherChart';
import { WeatherTable } from './components/WeatherTable';
import { ControlButtons } from './components/ControlButtons';
import type { WeatherResponse } from './types/weather';

function App() {
  const [latitude, setLatitude] = useState('51.5074');
  const [longitude, setLongitude] = useState('-0.1278');
  const [startDate, setStartDate] = useState(format(subMonths(new Date(), 1), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data: WeatherResponse = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setLatitude('');
    setLongitude('');
    setStartDate('');
    setEndDate('');
    setWeatherData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://t4.ftcdn.net/jpg/06/41/91/85/360_F_641918542_bL3O5qWqKmaVrxM12Qa1pp1owFvKKP3k.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 z-0 bg-blue-600/20 backdrop-blur-[2px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-500 p-3 rounded-full shadow-lg">
              <Thermometer className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Weather Dashboard</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
            Track temperature trends and variations with detailed historical weather data
          </p>
        </header>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <CoordinateInput
              label="Latitude"
              value={latitude}
              onChange={setLatitude}
              min={-90}
              max={90}
            />
            <CoordinateInput
              label="Longitude"
              value={longitude}
              onChange={setLongitude}
              min={-180}
              max={180}
            />
            <DateInput
              label="Start Date"
              value={startDate}
              onChange={setStartDate}
              max={endDate}
            />
            <DateInput
              label="End Date"
              value={endDate}
              onChange={setEndDate}
              min={startDate}
            />
          </div>

          <ControlButtons
            onFetch={fetchWeatherData}
            onReset={handleReset}
            loading={loading}
          />
        </div>

        {error && (
          <div className="bg-red-50/95 backdrop-blur-sm border-l-4 border-red-400 p-4 mb-8 rounded-r-lg shadow-lg">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {weatherData && (
          <div className="space-y-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6">
              <WeatherChart data={weatherData.daily} />
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl">
              <WeatherTable data={weatherData.daily} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;