/**
 * Props for the AuthiqaWidget component
 */
export interface AuthiqaWidgetProps {
  /** Your Authiqa public key */
  publicKey: string;
  
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
    layout?: {
      padding?: string;
      paddingTop?: string;
      margin?: string;
      borderRadius?: string;
      maxWidth?: string;
    };
    colors?: {
      background?: string;
      buttonBackground?: string;
      buttonText?: string;
      inputBackground?: string;
      inputText?: string;
      inputPlaceholder?: string;
      borderColor?: string;
    };
    typography?: {
      titleText?: {
        signinText?: string;
        signupText?: string;
        resetText?: string;
        updateText?: string;
        verifyText?: string;
        resendText?: string;
      };
      subtitleText?: {
        signinText?: string;
        signupText?: string;
        resetText?: string;
        updateText?: string;
        verifyText?: string;
        resendText?: string;
      };
      titleSize?: string;
      titleColor?: string;
      labelSize?: string;
      fontFamily?: string;
      labelColor?: string;
      labelFontWeight?: string;
      titleAlignment?: string;
      titleWeight?: string;
      titleLineHeight?: string;
      termsText?: {
        agreePrefix?: string;
        andConnector?: string;
        defaultPrefix?: string;
        linkText?: {
          terms?: string;
          privacy?: string;
          notifications?: string;
        };
        textColor?: string;
        linkColor?: string;
      };
      navTextColor?: string;
      navTextColorDark?: string;
    };
    inputs?: {
      emailPlaceholder?: string;
      passwordPlaceholder?: string;
      usernamePlaceholder?: string;
      confirmPasswordPlaceholder?: string;
      emailLabel?: string;
      passwordLabel?: string;
      usernameLabel?: string;
      confirmPasswordLabel?: string;
      borderRadius?: string;
      height?: string;
      width?: string;
      padding?: string;
      margin?: string;
      fontSize?: string;
      fontWeight?: string;
      focusBorderColor?: string;
      focusBoxShadow?: string;
      placeholderAlign?: string;
    };
    buttons?: {
      signinText?: string;
      signupText?: string;
      resetText?: string;
      updateText?: string;
      verifyText?: string;
      resendText?: string;
      height?: string;
      width?: string;
      padding?: string;
      margin?: string;
      borderRadius?: string;
      hoverBackground?: string;
    };
    navLinks?: {
      signinPrompt?: string;
      signinLinkText?: string;
      signupPrompt?: string;
      signupLinkText?: string;
      forgotPrompt?: string;
      forgotLinkText?: string;
      fontSize?: string;
      color?: string;
      fontFamily?: string;
      textAlign?: string;
      marginTop?: string;
      marginBottom?: string;
      fontWeight?: string;
      linkColor?: string;
      linkFontWeight?: string;
      backToSigninPrompt?: string;
    };
    pageLayout?: {
      backgroundColor?: string;
      formPosition?: 'center' | 'left' | 'right' | 'top' | 'bottom';
      formMarginTop?: string;
      formMarginBottom?: string;
      formMarginLeft?: string;
      formMarginRight?: string;
    };
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

  /** URL for password reset page */
  resetAuthPath?: string;

  /** Disable all widget-injected styles */
  disableStyles?: boolean;

  /** Custom messages for widget flows */
  messages?: {
    signinSuccess?: string;
    signupSuccess?: string;
    resetSuccess?: string;
    updateSuccess?: string;
    resendSuccess?: string;
    verificationSuccess?: string;
    signinLoading?: string;
    signupLoading?: string;
    resetLoading?: string;
    updateLoading?: string;
    resendLoading?: string;
    verificationLoading?: string;
  };

  /** Allow additional properties */
  [key: string]: any;
}