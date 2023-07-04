import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { appSlice } from 'store/reducers/appSlice'

import { HiMiniBars3 } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'


interface LinkType {
  to: string
  title: string
  id: number
}

const links: LinkType[] = [
  {
    to: '/market',
    title: 'Market',
    id: 1,
  },
  {
    to: '/bucket',
    title: 'Bucket',
    id: 2,
  },
]

interface Props {
  children: React.ReactNode
}

const Sidebar = ({ children }: Props) => {
  const theme = useAppSelector(state => state.appSlice.theme)
  const { changeTheme } = appSlice.actions
  const dispatch = useAppDispatch()

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="flex border-b items-center justify-between phone:px-3 phone:py-2 tablet:px-5 tablet:py-4">
        <button className="text-4xl font-bold" onClick={toggleMenu}>
          <HiMiniBars3 />
        </button>
        <div className="flex items-center space-x-4">
          <div onClick={() => dispatch(changeTheme('dark'))} className={`dark w-10 ${theme === "dark" ? "w-14" : ''} h-10 border-2 rounded-full shadow-[0_0_5px_2px_rgba(255,255,255,0.8)]`}/>
          <div onClick={() => dispatch(changeTheme('light'))} className={`light w-10 ${theme === "light" ? "w-14" : ''} h-10 border-2 rounded-full shadow-[0_0_5px_2px_rgba(255,255,255,0.8)]`}/>
        </div>
      </div>
      <div>
        <div onClick={toggleMenu} className={`${isOpen ? 'w-full h-screen' : 'w-0 h-0'} fixed top-0 left-0 bg-black/40`}/>
        <div className={`${isOpen ? 'left-0' : '-left-64'} fixed w-64 h-screen top-0 duration-300 ${theme}-sidebar`}>
          <div className="flex flex-col px-2 py-5 text-xl space-y-5 font-medium">
            {links.map(({ id, title, to }) => (
              <NavLink
                key={id}
                to={to}
                className={({ isActive }) => `${isActive ? `${theme}-active-links` : ''} block px-2 py-px rounded-md`}
                onClick={toggleMenu}
              >{title}</NavLink>
            ))}
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Sidebar
