export interface AuthStep {
  step: 'phone' | 'sms' | 'register' | 'home';
}

export interface PhoneData {
  phoneNumber: string;
  countryCode: string;
}

export interface SMSData {
  code: string;
  phoneNumber: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export interface User {
  id: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
}

export interface AuthState {
  currentStep: AuthStep['step'];
  phoneData?: PhoneData;
  smsData?: SMSData;
  registerData?: RegisterData;
  user?: User;
  isLoading: boolean;
  error?: string;
}
