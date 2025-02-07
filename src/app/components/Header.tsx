import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaCartShopping } from 'react-icons/fa6'
import { IoFastFoodOutline } from 'react-icons/io5'
import { MdOutlineAccountCircle } from 'react-icons/md'

const Header = () => {
  return (
    <div>
      <header className="text-gray-900 bg-blue-100 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
            <IoFastFoodOutline className='text-3xl'/>
            <span className="ml-3 text-xl font-semibold">Flavor Fusion</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-40 gap-4">
            <a className="mr-5 text-lg text-black hover:text-gray-700" href='/'>Home</a>
            <a className="mr-5 text-lg text-black hover:text-gray-700" href='/components/menu'>Menu</a>
            <a className="mr-5 text-lg text-black hover:text-gray-700" href='/components/about'>About</a>
            <a className="mr-5 text-lg text-black hover:text-gray-700" href='/components/contact'>Contact</a>
            </nav>
            <div className="hidden lg:flex items-center bg-gray-100 rounded-md px-3 py-1">
                <input
                type="text"
                className="bg-gray-100 outline-none text-sm text-black placeholder-gray-700"
                placeholder="Search..."
                />
                <a href="/"><CiSearch className="text-xl bg-blue-200 cursor-pointer" /></a>
           </div>
            <a href="/components/menu">
            <FaCartShopping className='text-3xl ml-2 mr-2' color='Darkgray'/>
            </a>
            <a href="/components/auth/login">
            <MdOutlineAccountCircle className='text-3xl'/>
            </a>
        </div>
      </header>

    </div>
  )
}

export default Header