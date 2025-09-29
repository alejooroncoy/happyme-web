export interface AuthStep {
  step: 'phone' | 'sms' | 'register' | 'login' | 'home';
}

export interface PhoneData {
  phoneNumber: string;
  countryCode: string;
  userId?: number;
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

export interface LoginData {
  email: string;
  password: string;
  phoneNumber: string;
}

export interface User {
  id: string;
  phoneNumber: string;
  email: string;
  name?: string;
  age?: number;
  mood?: string;
  plan?: 'Free' | 'Premium';
  college?: string;
  semester?: number;
  gender?: string;
  createdAt: Date;
}

export interface AuthState {
  currentStep: AuthStep['step'];
  phoneData?: PhoneData;
  smsData?: SMSData;
  registerData?: RegisterData;
  loginData?: LoginData;
  user?: User;
  isExistingUser?: boolean;
  isLoading: boolean;
  error?: string;
}
