import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import LanguageProvider from "./components/LanguageProvider"
import { translationMessages } from "./i18n"
import registerServiceWorker from './registerServiceWorker'
import "simple-line-icons/css/simple-line-icons.css"
import "./bootstrap.css"
import "typeface-roboto"

// ========================================

ReactDOM.render((
  <LanguageProvider locale="it" messages={translationMessages}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </LanguageProvider>
  ), document.getElementById('root')
)

registerServiceWorker()