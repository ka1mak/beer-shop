import React from 'react'
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

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white phone:px-2 py-10 laptop:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2" src="/logo.png" alt="Logo" />
          <span className="font-bold phone:text-sm tablet:text-lg">Beer-Shop</span>
        </div>
        <div className="flex tablet:space-x-4 tablet:text-lg phone:text-sm phone:space-x-1">
          {links.map(({ to, id, title }) => (
            <NavLink
              className="hover:text-gray-300"
              key={id}
              to={to}
            >{title}</NavLink>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
