import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './mainPages/App.jsx';
import Home from './mainPages/home.jsx';
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path: "/SearchImages",
    element:<App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)