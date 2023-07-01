import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from 'pages/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="*" element={<MainLayout />} />
    </Routes>
  )
}

export default App
