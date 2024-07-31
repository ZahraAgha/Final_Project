import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import { Router, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import RightCards from './components/RightCards';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';
import ForgetPass from './components/ForgetPass';
import ResetPassword from './components/ResetPassword';
import ViewCart from './components/ViewCart.jsx';
import CheckOut from './components/CheckOut.jsx';

//Redux 
import { Provider } from "react-redux";
import store from './store/store.js';
import Admin from './pages/Admin.jsx';
import AdminSignin from './pages/AdminSignin.jsx';
import AdminProducts from './pages/AdminProducts.jsx';
import AdminProductAdd from './pages/AdminProductAdd.jsx';
import AdminSizes from './pages/AdminSizes.jsx';
import AdminSizeAdd from './pages/AdminSizeAdd.jsx';
import AdminCategories from './pages/AdminCategories.jsx';
import AdminCategoryAdd from './pages/AdminCategoryAdd.jsx';
import AdminColors from './pages/AdminColors.jsx';
import AdminColorAdd from './pages/AdminColorAdd.jsx';
import AdminOrders from "./pages/AdminOrders";
import AdminOrderEdit from "./pages/AdminOrderEdit";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/admin/login",
        element: <AdminSignin />
      },

      {
        path: '/admin',
        element: <Admin />,
        children: [
          {
            path: 'products',
            children: [
              {
                path: "",
                element: <AdminProducts />
              },
              {
                path: "add",
                element: <AdminProductAdd />,
              },
              {
                path: "edit/:id",
                element: <AdminProductAdd />,
              }
            ]
          },

          {
            path: 'sizes',
            children: [
              {
                path: "",
                element: <AdminSizes />
              },
              {
                path: "add",
                element: <AdminSizeAdd />,
              }
            ]
          },

          {
            path: 'categories',
            children: [
              {
                path: "",
                element: <AdminCategories />
              },
              {
                path: "add",
                element: <AdminCategoryAdd />,
              }
            ]
          },

          {
            path: 'colors',
            children: [
              {
                path: "",
                element: <AdminColors />
              },
              {
                path: "add",
                element: <AdminColorAdd />,
              }
            ]
          },

          {
            path: 'orders',
            children: [
              {
                path: '',
                element: <AdminOrders />
              },
              {
                path: 'edit/:id',
                element: <AdminOrderEdit />
              }
            ]
          }
        ]
      },

      {
        path: "",
        element: <App />,
        children: [

          {
            path: "",
            element: <Home />
          },
          {
            path: "/home",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/blog",
            element: <Blog />
          },
          {
            path: "/product",
            element: <Products />
          },
          {
            path: "/signin",
            element: <Signin />
          },
          {
            path: "/signup",
            element: <Signup />
          },
          {
            path: "/forget",
            element: <ForgetPass />

          },
          {
            path: "/reset",
            element: <ResetPassword />

          },
          {
            path: "/contactus",
            element: <ContactUs />
          },
          {

            path: "/wishlist",
            element: <Wishlist />
          },

          {
            path: "/products",
            element: <RightCards />
          },
          {
            path: "/products/:id",
            element: <ProductDetail />
          },
          {
            path: "/viewcart",
            element: <ViewCart />
          },
          {
            path: "/checkout",
            element: <CheckOut />
          },
        ]
      }
    ]
  },

])


function Root() {

}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>



    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>



  </React.StrictMode>
);


