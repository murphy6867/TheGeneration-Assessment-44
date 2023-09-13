import React from "react"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed flex w-[100%] py-4 px-10 justify-between items-center bg-nav-bg'>
      <Link className="" to="/">
        <img 
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" 
          alt="logo"
          className="w-32" 
        />
      </Link>
      <nav className="flex w-96 justify-around text-nav-text text-xl font-bold">
        <NavLink className="hover:text-white cursor-pointer"
          to="/"
        >
          Home
        </NavLink>
        <NavLink className="hover:text-white cursor-pointer font-bold"
          to="user"
        >
          User
        </NavLink>
        <NavLink className="hover:text-white cursor-pointer font-bold"
          to="admin"
        >
          Admin
        </NavLink>
        <NavLink className="hover:text-white cursor-pointer font-bold"
          to="owner"
        >
          Owner
        </NavLink>
      </nav>
    </header>
  )
}

export default Header