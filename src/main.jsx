import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/Home/Home/Home';
import AuthProvider from './Provider/AuthProvider';
import Register from './Login/Register';
import Login from './Login/Login';
import Category from './pages/Home/Category/Category';
import AllToys from './pages/AllToys/AllToys';
import Details from './pages/Details/Details';
import PrivateRoute from './Private/PrivateRoute';
import ErrorPage from './pages/Error/ErrorPage';
import Blog from './pages/Blog/Blog';
import AddToy from './pages/AddToy/AddToy';
import MyToys from './pages/MyToys/MyToys';
import Update from './pages/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'category',
        element: <Category></Category>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: 'details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`https://assignment-eleven-server-three.vercel.app/toys/${params.id}`)
      },
      {
        path: 'blog',
        element:<Blog></Blog>
      },
      {
        path: 'addtoys',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`https://assignment-eleven-server-three.vercel.app/toys/${params.id}`)
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




// ---------------------------------------------
// Register

