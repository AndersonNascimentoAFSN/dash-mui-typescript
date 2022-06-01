import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { CssBaseline } from '@mui/material';
import { AppThemeProvider } from './shared/contexts';
import { DrawerProvider } from './shared/contexts';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <DrawerProvider>
        <AppThemeProvider>
          <App />
          <CssBaseline />
        </AppThemeProvider>
      </DrawerProvider>
    </Router>
  </React.StrictMode>,
);
