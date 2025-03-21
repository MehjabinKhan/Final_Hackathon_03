import Image from 'next/image'
import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { RiMenuAddLine } from 'react-icons/ri'

const Lobby = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
                className="object-cover object-center rounded"
                alt="Lobby" width={720} height={500}
                src="/lobby.webp"
            />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
               <a href="/" className='flex gap-2'>Flavor Fusion <IoFastFoodOutline className='text-3xl'/></a>
            </h1>
            <p className="mb-8 leading-relaxed">
            At Flavor Fusion, we have created a vibrant and inviting space where flavor meets comfort. 
            The ambiance is designed to make you feel right at home, with cozy seating, soft lighting, 
            and a modern touch throughout. Whether you are here to unwind or fuel up for the day, our 
            welcoming atmosphere is the perfect spot to enjoy good vibes and great food.
            </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
                <a href="/components/menu" className='flex gap-2'>Order Here<RiMenuAddLine className='text-2xl'/></a>
                </button>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Lobby