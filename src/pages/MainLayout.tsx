import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from 'layouts/Sidebar'
import { Market } from './Market'
import { Bucket } from './Bucket'
import Footer from 'layouts/Footer'

const MainLayout = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path='/market/*' element={<Market.Pages />} />
        <Route path='/bucket/*' element={<Bucket.Pages />} />
      </Routes>
      <Footer />
    </Sidebar>
  )
}

export default MainLayout
