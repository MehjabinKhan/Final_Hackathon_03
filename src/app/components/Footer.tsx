import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { IoFastFoodOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-blue-100">
      <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center md:justify-start justify-center mb-4 md:mb-0">
          <IoFastFoodOutline className='text-3xl' />
          <span className="ml-3 text-xl font-semibold">Flavor Fusion</span>
        </div>
        <p className="text-base text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2">
          © Flavor Fusion —
          <a href="mailto:mehjabinkhan2004@gmail.com" className="underline ml-1">mehjabinkhan2004@gmail.com</a>
        </p>
        <div className="ml-auto inline-flex justify-center">
          <a className="text-gray-500 text-2xl mx-2" href="https://www.linkedin.com/in/mehjabin-khan-8965742bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a className="text-gray-500 text-2xl mx-2" href="https://github.com/MehjabinKhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="text-gray-500 text-2xl mx-2" href="https://wa.me/qr/7VHINLHITFBGC1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;