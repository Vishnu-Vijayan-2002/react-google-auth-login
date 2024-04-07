import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
     <GoogleOAuthProvider clientId='927865690069-k6tvbolffmeor7hj72odgubva9ql1vrq.apps.googleusercontent.com'>
      <App/>
     </GoogleOAuthProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
