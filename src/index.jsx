import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import "./assets/styles/index.css";
import store from './store';
import App from './App';
import messages_en from './locales/en.json';

const messages = {
    'en': messages_en,
    // other languages go here
};

const language = navigator.language.split(/[-_]/)[0];
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <Provider store={store}>
        <IntlProvider locale={language} messages={messages[language]}>
            <App />
        </IntlProvider>
    </Provider>
);
