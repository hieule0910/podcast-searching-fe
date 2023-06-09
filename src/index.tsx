import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './App/redux/store';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
