import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'styles/reset.scss';
import 'styles/normalize.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
