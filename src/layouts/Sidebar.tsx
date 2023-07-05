import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { HiMiniBars3 } from 'react-icons/hi2'
import { BsCart3 } from 'react-icons/bs'


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
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const goToMain = () => navigate('/market')
  const goToBucket = () => navigate('/bucket')

  return (
    <>
      <div className="flex justify-between items-center px-4 tablet:px-6 py-2 border-b">
        <div className="flex items-center space-x-4">
          <img
            onClick={goToMain}
            src="./logo.png"
            className="w-14"
            alt="logotype"
          />
          <div className="hidden tablet:block text-xl tracking-wider font-semibold">Beer-Shop</div>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-200 rounded-md phone:w-3/4 phone:mx-4 tablet:w-2/4 px-4 py-1"
        />

        <div className="text-3xl flex items-center space-x-4">
          <button onClick={goToBucket}><BsCart3 /></button>
          <button onClick={toggleMenu}><HiMiniBars3 /></button>
        </div>
      </div>

      <div>
        <div
          className={`${isOpen ? 'w-full h-screen' : ''} fixed top-0 left-0 bg-black/20`}
          onClick={toggleMenu}
        />
        <div className={`${isOpen ? 'left-0' : '-left-64'} px-2 py-4 bg-white top-0 w-64 h-screen duration-150 fixed`}>
          <nav className="flex flex-col space-y-3 text-lg">
            {links.map(({ to, id, title }) => (
              <NavLink
                className={({ isActive }) => `${isActive ? 'bg-blue-300' : ''} px-2 py-px rounded-md`}
                key={id}
                to={to}
                onClick={toggleMenu}
              >{title}</NavLink>
            ))}
          </nav>
        </div>
      </div>

      {children}
    </>
  )
}

export default Sidebar
