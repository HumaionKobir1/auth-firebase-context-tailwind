import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthProvider from './providers/AuthProvider';
import Order from './component/Order';
import PrivateRoute from './privateRoute/PrivateRoute';
import UserProfile from './component/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/order",
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
