import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import MainLayout from 'pages/MainLayout'

const App = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate('/market')
  }, [navigate])

  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  )
}

export default App
