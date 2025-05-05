import React, { useEffect, useRef } from 'react';
import type { AuthiqaWidgetProps } from '../types';

// Define the window interface to include AuthiqaWidget
declare global {
  interface Window {
    AuthiqaWidget: any;
  }
}

/**
 * AuthiqaWidget component for React applications
 * Wraps the vanilla Authiqa widget in a React component
 */
export const AuthiqaWidget: React.FC<AuthiqaWidgetProps> = ({
  apiKey,
  action = 'signin',
  theme = 'light',
  mode = 'popup',
  container = 'authiqa-react-container',
  onSuccess,
  onError,
  customization,
  organizationDomain = 'authiqa.com',
  termsAndConditions,
  privacy,
  notificationSettings,
  verifyAuthPath,
  updatePasswordPath,
  resendAuthPath,
  successAuthPath,
  signinAuthPath,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<any>(null);
  const uniqueId = useRef(`authiqa-react-${Math.random().toString(36).substring(2, 11)}`);

  useEffect(() => {
    // Ensure the AuthiqaWidget is loaded
    if (typeof window.AuthiqaWidget !== 'function') {
      console.error('AuthiqaWidget not found. Make sure @authiqa/widget is properly loaded.');
      return;
    }

    // Create widget configuration
    const widgetConfig = {
      apiKey,
      container: uniqueId.current,
      mode,
      theme,
      organizationDomain,
      termsAndConditions,
      privacy,
      notificationSettings,
      customization,
      verifyAuthPath,
      updatePasswordPath,
      resendAuthPath,
      successAuthPath,
      signinAuthPath,
      ...rest
    };

    // Initialize the widget
    const widget = new window.AuthiqaWidget(widgetConfig);
    widgetRef.current = widget;

    // Show the widget with the specified action
    widget.show(action);

    // Set up event listeners for success and error callbacks
    const handleSuccess = (data: any) => {
      if (onSuccess) onSuccess(data);
    };

    const handleError = (error: any) => {
      if (onError) onError(error);
    };

    // Add event listeners
    if (onSuccess) {
      document.addEventListener('authiqa:success', handleSuccess as EventListener);
    }
    
    if (onError) {
      document.addEventListener('authiqa:error', handleError as EventListener);
    }

    // Cleanup function
    return () => {
      // Remove event listeners
      if (onSuccess) {
        document.removeEventListener('authiqa:success', handleSuccess as EventListener);
      }
      
      if (onError) {
        document.removeEventListener('authiqa:error', handleError as EventListener);
      }

      // Clean up the widget if needed
      if (widgetRef.current && typeof widgetRef.current.destroy === 'function') {
        widgetRef.current.destroy();
      }
    };
  }, [
    apiKey, 
    action, 
    theme, 
    mode, 
    onSuccess, 
    onError, 
    customization,
    organizationDomain,
    termsAndConditions,
    privacy,
    notificationSettings,
    verifyAuthPath,
    updatePasswordPath,
    resendAuthPath,
    successAuthPath,
    signinAuthPath
  ]);

  return <div id={uniqueId.current} ref={containerRef}></div>;
};

