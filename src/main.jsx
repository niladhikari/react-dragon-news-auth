import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';
import AuthProvides from './Providers/AuthProvides/AuthProvides';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvides><RouterProvider router={router} /></AuthProvides>
  </React.StrictMode>,
)
