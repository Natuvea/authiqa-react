# Authiqa React

React components for Authiqa authentication.

## Installation

```bash
npm install authiqa-react
```

## Usage

First, include the Authiqa Widget script in your HTML:

```html
<script src="https://widget.authiqa.com"></script>
```

Then, use the AuthiqaWidget component in your React application:

```jsx
import { AuthiqaWidget } from 'authiqa-react';

function App() {
  const handleSuccess = (data) => {
    console.log('Authentication successful:', data);
  };

  const handleError = (error) => {
    console.error('Authentication error:', error);
  };

  return (
    <div>
      <h1>My App</h1>
      <AuthiqaWidget 
        publicKey="your-public-key"
        action="signin" // or "signup", "reset", etc.
        theme="light" // or "dark"
        disableStyles={false} // disables widget-injected styles if true
        resetAuthPath="/reset-password"
        messages={{
          signinSuccess: 'Welcome!',
          signupSuccess: 'Account created!'
        }}
        customization={{
          // supports all widget customization options
        }}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
}
```

## Vite Configuration

If you're using Vite, you need to explicitly set the entry point in your `vite.config.js` file:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Explicitly set the entry point
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
```

This configuration is necessary to ensure that the component loads correctly in your Vite application.

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| publicKey | string | Yes | - | Your Authiqa public key |
| action | string | No | "signin" | Authentication action to display |
| theme | "light" \| "dark" | No | "light" | Widget theme |
| mode | "popup" \| "inline" | No | "popup" | Display mode |
| container | string | No | - | Container ID |
| onSuccess | function | No | - | Success callback |
| onError | function | No | - | Error callback |
| customization | object | No | - | Custom styling options (see widget docs for all options) |
| organizationDomain | string | No | "authiqa.com" | Your organization domain |
| termsAndConditions | string | No | - | URL to terms and conditions |
| privacy | string | No | - | URL to privacy policy |
| notificationSettings | string | No | - | URL to notification settings |
| verifyAuthPath | string | No | - | Path for email verification |
| updatePasswordPath | string | No | - | Path for password update |
| resendAuthPath | string | No | - | Path for resending verification |
| successAuthPath | string | No | - | Path for success redirect |
| signinAuthPath | string | No | - | Path for sign-in redirect |
| resetAuthPath | string | No | - | Path for password reset page |
| disableStyles | boolean | No | false | Disable all widget-injected styles |
| messages | object | No | - | Custom messages for widget flows (see below) |

### Messages prop

The `messages` prop supports the following fields:

```
{
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
}
```

## License

MIT
