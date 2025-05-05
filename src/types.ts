/**
 * Props for the AuthiqaWidget component
 */
export interface AuthiqaWidgetProps {
  /** Your Authiqa API key */
  apiKey: string;
  
  /** The authentication action to perform */
  action?: 'signin' | 'signup' | 'reset' | 'verify' | 'update' | 'resend';
  
  /** The widget theme */
  theme?: 'light' | 'dark' | 'none';
  
  /** The display mode */
  mode?: 'popup' | 'inline';
  
  /** ID for the container element */
  container?: string;
  
  /** Callback when authentication succeeds */
  onSuccess?: (data: any) => void;
  
  /** Callback when authentication fails */
  onError?: (error: any) => void;
  
  /** Custom styling options */
  customization?: {
    colors?: Record<string, string>;
    typography?: Record<string, any>;
    layout?: Record<string, string>;
    buttons?: Record<string, any>;
    inputs?: Record<string, any>;
  };
  
  /** Organization domain for white-labeling */
  organizationDomain?: string;
  
  /** URL for terms and conditions */
  termsAndConditions?: string;
  
  /** URL for privacy policy */
  privacy?: string;
  
  /** URL for notification settings */
  notificationSettings?: string;
  
  /** URL for email verification */
  verifyAuthPath?: string;
  
  /** URL for password update */
  updatePasswordPath?: string;
  
  /** URL for email resend */
  resendAuthPath?: string;
  
  /** URL for successful authentication */
  successAuthPath?: string;
  
  /** URL for sign-in */
  signinAuthPath?: string;
  
  /** Allow additional properties */
  [key: string]: any;
}