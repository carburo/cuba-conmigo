import React from "react";
import ReactDOM from "react-dom";
import "popper.js"
import App from "./containers/App/index";
import { BrowserRouter } from "react-router-dom"
import LanguageProvider from "./containers/LanguageProvider/index"
import { translationMessages } from "./i18n"
import registerServiceWorker from './registerServiceWorker';
import "simple-line-icons/css/simple-line-icons.css"
import "./main.css";

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