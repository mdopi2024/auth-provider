import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/root/Root.jsx';
import Home from './pages/Home.jsx';
import Register from './components/Register.jsx';
import LogIn from './components/LogIn.jsx';
import Provider from './provider/Provider.jsx';
import Order from './components/Order.jsx';
import PriviateRoute from './components/PriviateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/order',
        element:<PriviateRoute><Order></Order></PriviateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <Provider>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
  
  </StrictMode>,
)
