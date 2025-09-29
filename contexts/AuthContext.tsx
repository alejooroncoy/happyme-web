'use client';

import React, { createContext, useContext, useReducer, useCallback, ReactNode, useEffect } from 'react';
import { AuthState, AuthStep, PhoneData, SMSData, RegisterData, LoginData, User } from '@/types/auth';

type AuthAction =
  | { type: 'SET_STEP'; payload: AuthStep['step'] }
  | { type: 'SET_PHONE_DATA'; payload: PhoneData }
  | { type: 'SET_SMS_DATA'; payload: SMSData }
  | { type: 'SET_REGISTER_DATA'; payload: RegisterData }
  | { type: 'SET_LOGIN_DATA'; payload: LoginData }
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_EXISTING_USER'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | undefined }
  | { type: 'RESET' };

// Función para obtener el estado inicial desde localStorage
const getInitialState = (): AuthState => {
  if (typeof window === 'undefined') {
    return {
      currentStep: 'phone',
      isLoading: false,
    };
  }

  try {
    const savedUser = localStorage.getItem('happyme_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      return {
        currentStep: 'home',
        isLoading: false,
        user: user,
      };
    }
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
  }

  return {
    currentStep: 'phone',
    isLoading: false,
  };
};

const initialState: AuthState = getInitialState();

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload, error: undefined };
    case 'SET_PHONE_DATA':
      return { ...state, phoneData: action.payload };
    case 'SET_SMS_DATA':
      return { ...state, smsData: action.payload };
    case 'SET_REGISTER_DATA':
      return { ...state, registerData: action.payload };
    case 'SET_LOGIN_DATA':
      return { ...state, loginData: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload, currentStep: 'home' };
    case 'SET_EXISTING_USER':
      return { ...state, isExistingUser: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  goToStep: (step: AuthStep['step']) => void;
  setPhoneData: (data: PhoneData) => void;
  setSMSData: (data: SMSData) => void;
  setRegisterData: (data: RegisterData) => void;
  setLoginData: (data: LoginData) => void;
  setUser: (user: User) => void;
  setExistingUser: (isExisting: boolean) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | undefined) => void;
  reset: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Guardar usuario en localStorage cuando cambie
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('happyme_user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('happyme_user');
    }
  }, [state.user]);

  const goToStep = useCallback((step: AuthStep['step']) => {
    dispatch({ type: 'SET_STEP', payload: step });
  }, []);

  const setPhoneData = useCallback((data: PhoneData) => {
    dispatch({ type: 'SET_PHONE_DATA', payload: data });
  }, []);

  const setSMSData = useCallback((data: SMSData) => {
    dispatch({ type: 'SET_SMS_DATA', payload: data });
  }, []);

  const setRegisterData = useCallback((data: RegisterData) => {
    dispatch({ type: 'SET_REGISTER_DATA', payload: data });
  }, []);

  const setLoginData = useCallback((data: LoginData) => {
    dispatch({ type: 'SET_LOGIN_DATA', payload: data });
  }, []);

  const setUser = useCallback((user: User) => {
    dispatch({ type: 'SET_USER', payload: user });
  }, []);

  const setExistingUser = useCallback((isExisting: boolean) => {
    dispatch({ type: 'SET_EXISTING_USER', payload: isExisting });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  }, []);

  const setError = useCallback((error: string | undefined) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const logout = useCallback(() => {
    console.log('🔐 AuthContext: Logging out user');
    localStorage.removeItem('happyme_user');
    dispatch({ type: 'RESET' });
  }, []);

  const value: AuthContextType = {
    state,
    dispatch,
    goToStep,
    setPhoneData,
    setSMSData,
    setRegisterData,
    setLoginData,
    setUser,
    setExistingUser,
    setLoading,
    setError,
    reset,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
