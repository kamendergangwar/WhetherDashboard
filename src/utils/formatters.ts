export const formatTemperature = (temp: number): string => {
  return `${temp.toFixed(1)}°C`;
};

export const calculateTemperatureRange = (max: number, min: number) => {
  const range = `${(max - min).toFixed(1)}°C`;
  let variation: 'High' | 'Moderate' | 'Low';

  const difference = max - min;
  if (difference > 15) {
    variation = 'High';
  } else if (difference > 8) {
    variation = 'Moderate';
  } else {
    variation = 'Low';
  }

  return { range, variation };
};