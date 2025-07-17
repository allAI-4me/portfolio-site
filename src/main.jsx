import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ← this must be here
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App/></React.StrictMode>
)
