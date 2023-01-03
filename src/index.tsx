import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import allReducers from './state/reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({ reducer: allReducers })

export type RootState = ReturnType<typeof store.getState>;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);