import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { Route, Routes } from 'react-router-dom'
import Sidebar from 'layouts/Sidebar'
import { Market } from './Market'

const MainLayout = () => {
  const theme = useAppSelector(state => state.appSlice.theme)

  return (
    <div className={`${theme} min-h-screen`}>
      <Sidebar>
        <Routes>
          <Route path='/market/*' element={<Market.Pages />} />
        </Routes>
      </Sidebar>
    </div>
  )
}

export default MainLayout
