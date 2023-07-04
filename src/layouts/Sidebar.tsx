import React from 'react'

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
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="flex border-b items-center justify-between phone:px-3 phone:py-2 tablet:px-5 tablet:py-4">
        <button className="text-4xl font-bold" onClick={toggleMenu}>
          <HiMiniBars3 />
        </button>
      </div>
      <div>
        <div onClick={toggleMenu} className={`${isOpen ? 'w-full h-screen' : 'w-0 h-0'} fixed top-0 left-0 bg-black/40`} />
        <div className={`${isOpen ? 'left-0' : '-left-64'} bg-white fixed w-64 h-screen top-0 duration-300`}>
          <div className="flex flex-col px-2 py-5 text-xl space-y-5 font-medium">
            {links.map(({ id, title, to }) => (
              <NavLink
                key={id}
                to={to}
                className={({ isActive }) => `${isActive ? 'bg-blue-300' : ''} block px-2 py-px rounded-md`}
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
