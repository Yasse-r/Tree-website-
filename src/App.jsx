import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header.jsx'

import Counter from './Counter.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home_Page from './HomePage/Home_Page.jsx'

function App() {
  
  return (
    <>
    <Header></Header>
    <Home_Page></Home_Page>
    </>
  );
}

export default App
