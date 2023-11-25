import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import './assets/css/login.css'
import { BrowserRouter } from 'react-router-dom';
import { CityProvider, CustomerProvider } from 'hooks/useCustomContext';
import Appy from 'Appy';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 // <React.StrictMode>
    <>
    <CustomerProvider>
    <CityProvider>
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
      {/* <App /> */}
      <Appy/>
      </BrowserRouter>

    </Provider>
    </CityProvider>
    </CustomerProvider>
    </>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
