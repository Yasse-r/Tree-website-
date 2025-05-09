import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header.jsx'
import Form_sign from './Login_reg/Form_sign.jsx'

import Counter from './Counter.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home_Page from './HomePage/Home_Page.jsx'

const router = createBrowserRouter([
  {path : '/',
    element :  <>
    <Header></Header>
    <Home_Page></Home_Page>
    </>,
  },
 {path : '/Login',
    element :  <>
    <Header></Header>
    <Form_sign></Form_sign>
    </>,
  },
]);

function App() {
  
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
