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
        apiKey="your-api-key"
        action="signin" // or "signup", "resetPassword", etc.
        theme="light" // or "dark"
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
| apiKey | string | Yes | - | Your Authiqa API key |
| action | string | Yes | "signin" | Authentication action to display |
| theme | "light" \| "dark" | No | "light" | Widget theme |
| container/div | string | Yes | authiqa | Container ID |
| onSuccess | function | No | - | Success callback |
| onError | function | No | - | Error callback |
| customization | object | No | - | Custom styling options |
| organizationDomain | string | No | "authiqa.com" | Your organization domain |
| termsAndConditions | string | No | - | URL to terms and conditions |
| privacy | string | No | - | URL to privacy policy |
| notificationSettings | string | No | - | URL to notification settings |
| verifyAuthPath | string | No | - | Path for email verification |
| updatePasswordPath | string | No | - | Path for password update |
| resendAuthPath | string | No | - | Path for resending verification |
| successAuthPath | string | No | - | Path for success redirect |
| signinAuthPath | string | No | - | Path for sign-in redirect |

## License

MIT
