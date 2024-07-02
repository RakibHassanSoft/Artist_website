import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './Route.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AddItem from './pages/AddItem.jsx';
import Items from './pages/Items.jsx';
import List from './pages/List.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Details from './pages/Details.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import UpdatePage from './pages/UpdatePage.jsx';
import Error from './pages/Errror.jsx';
import CategoriesSection from './components/CategoriesSection.jsx';
import DetailsCategory from './pages/DetailsCategory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://galary-backend-1.onrender.com/arts'),

      },
      {
        path: "/add-item",
        element: <AddItem></AddItem>
      

      }
      ,
      {
        path: "/profile",
        element: <Profile></Profile>

      }
      ,
      {
        path: "/items",
        element: <Items></Items>,
        loader: () => fetch('https://galary-backend-1.onrender.com/arts'),

      }
      ,
      {
        path: "/my-list",
        element: <List></List>

      }
      ,
      {
        path: "/login",
        element: <Login></Login>
        
      }
      ,
      {
        path: "/register",
        element: <Register></Register>
        

      }
      ,
      {
        path: "/details/:itemId",
        element: <Details></Details>,
        loader: () => fetch('https://galary-backend-1.onrender.com/arts'),

      },
      ,
      {
        path: "/categoryDetails/:itemId",
        element: <DetailsCategory></DetailsCategory>,
        loader: () => fetch('https://galary-backend-1.onrender.com/categories'),

      },
      {
        path: "my-list/update/:itemId",
        element: <UpdatePage></UpdatePage>,
        loader: () => fetch('https://galary-backend-1.onrender.com/arts'),

      },
      {
        path: "/items/update/:itemId",
        element: <UpdatePage></UpdatePage>,
        loader: () => fetch('https://galary-backend-1.onrender.com/arts'),

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
)