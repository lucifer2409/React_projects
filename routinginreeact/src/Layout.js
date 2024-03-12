import React from 'react'
import Header from './Components/header/header'
import Footer from './Components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
