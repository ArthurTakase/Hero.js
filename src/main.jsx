import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/style.scss'
import './scss/custom.scss'
import '../i18n/config';

if (!localStorage.getItem('lang')) { localStorage.setItem('lang', 'en') }

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
