export interface FormErrors {
    latitude?: string;
    longitude?: string;
    startDate?: string;
    endDate?: string;
  }
  
  export interface FormState {
    isValid: boolean;
    errors: FormErrors;
  }