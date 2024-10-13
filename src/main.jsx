import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Strict = import.meta.env.DEV ? React.StrictMode : React.Fragment

ReactDOM.createRoot(document.getElementById('root')).render(
  <Strict>
    <App />
  </Strict>,
)
