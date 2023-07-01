import React from 'react'
import { Sidebar } from 'components'
import { useAppSelector } from 'hooks/redux'

const MainLayout = () => {
  const theme = useAppSelector(state => state.appSlice.theme)

  return (
    <div className={`${theme} min-h-screen`}>
      <Sidebar />
    </div>
  )
}

export default MainLayout
