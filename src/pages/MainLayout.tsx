import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from 'layouts/Sidebar'
import { Market } from './Market'
import { Bucket } from './Bucket'

const MainLayout = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path='/market/*' element={<Market.Pages />} />
        <Route path='/bucket/*' element={<Bucket.Pages />} />
      </Routes>
    </Sidebar>
  )
}

export default MainLayout
