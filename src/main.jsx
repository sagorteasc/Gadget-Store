import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Phones from './components/Phones/Phones';
import IPhones from './components/IPhones/IPhones';
import Laptops from './components/Laptops/Laptops';
import Earbuds from './components/Earbuds/Earbuds';
import Tablets from './components/Tablets/Tablets';
import SmartWatches from './components/SmartWatches/SmartWatches';
import Accessories from './components/Accessories/Accessories';
import ProductDetails from './components/ProductDetails/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/product/:product_id",
        loader: () => fetch('/gadgets.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/phones",
        loader: () => fetch('/gadgets.json'),
        element: <Phones></Phones>
      },
      {
        path: "/iPhones",
        loader: () => fetch("/gadgets.json"),
        element: <IPhones></IPhones>
      },
      {
        path: "/laptops",
        loader: () => fetch("/gadgets.json"),
        element: <Laptops></Laptops>
      },
      {
        path: "/earbuds",
        loader: () => fetch("/gadgets.json"),
        element: <Earbuds></Earbuds>
      },
      {
        path: "/tablets",
        loader: () => fetch("/gadgets.json"),
        element: <Tablets></Tablets>
      },
      {
        path: "/smartWatches",
        loader: () => fetch("/gadgets.json"),
        element: <SmartWatches></SmartWatches>
      },
      {
        path: "/accessories",
        loader: () => fetch("/gadgets.json"),
        element: <Accessories></Accessories>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
