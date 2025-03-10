import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { IoFastFoodOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-900 bg-blue-100 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center" href='/'>
            <IoFastFoodOutline className='text-3xl'/>
            <span className="ml-3 text-xl font-semibold">Flavor Fusion</span>
            </a>
            <p className="text-base text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2 sm:mt-0 mt-4">
            © Flavor Fusion — <a href="mailto:mehjabinkhan2004@gmail.com" className='underline'>mehjabinkhan2004@gmail.com</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500 text-2xl" href='https://www.linkedin.com/in/mehjabin-khan-8965742bb/'>
                <FaLinkedin/>
            </a>
            <a className="ml-3 text-gray-500 text-2xl" href='https://github.com/MehjabinKhan'>
                <FaGithub/>
            </a>
            <a className="ml-3 text-gray-500 text-2xl" href='https://wa.me/qr/7VHINLHITFBGC1 '>
                <FaWhatsapp/>
            </a>
            </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
