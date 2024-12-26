import { FormErrors, FormState } from "../types/form";

export const isValidLatitude = (lat: string): boolean => {
    const num = Number(lat);
    return lat !== '' && !isNaN(num) && num >= -90 && num <= 90;
  };
  
  export const isValidLongitude = (lng: string): boolean => {
    const num = Number(lng);
    return lng !== '' && !isNaN(num) && num >= -180 && num <= 180;
  };
  
  export const isValidDate = (date: string): boolean => {
    return date !== '' && !isNaN(Date.parse(date));
  };
  
  export const validateWeatherForm = (
    latitude: string,
    longitude: string,
    startDate: string,
    endDate: string
  ): FormState => {
    const errors: FormErrors = {};
    
    if (!isValidLatitude(latitude)) {
      errors.latitude = 'Please enter a valid latitude between -90 and 90';
    }
  
    if (!isValidLongitude(longitude)) {
      errors.longitude = 'Please enter a valid longitude between -180 and 180';
    }
  
    if (!isValidDate(startDate)) {
      errors.startDate = 'Please select a start date';
    }
  
    if (!isValidDate(endDate)) {
      errors.endDate = 'Please select an end date';
    }
  
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      errors.endDate = 'End date must be after start date';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };