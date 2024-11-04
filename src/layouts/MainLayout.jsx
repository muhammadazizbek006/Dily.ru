import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
const MainLayout = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout