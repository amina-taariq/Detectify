import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Grid from './Grid'
import List from './List'
import Hero from './Hero'
import Feature from './Feature'
const Layout = () => {
  return (
      <>
          <Navbar />
          <Hero />
          <Feature/>
          <Outlet />
          <Grid />
          <List/>
          <Footer/>
    </>
  )
}

export default Layout