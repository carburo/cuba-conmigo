import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom"
import LanguageProvider from "./components/LanguageProvider"
import { translationMessages } from "./i18n"
import registerServiceWorker from './registerServiceWorker';
import "simple-line-icons/css/simple-line-icons.css"
import "./main.css";
import "typeface-roboto"

// ========================================

ReactDOM.render((
  <LanguageProvider locale="it" messages={translationMessages}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>
  ), document.getElementById('root')
);

registerServiceWorker();