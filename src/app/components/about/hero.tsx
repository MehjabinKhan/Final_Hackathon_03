import Image from 'next/image'
import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { RiMenuSearchLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Flavor Fusion" width={720} height={600}
            src="/logo.png"
            />
            <div className="text-center lg:w-2/3 w-full">
            <div className="flex gap-2 text-center justify-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
             Flavor Fusion 
            </h1>
            <IoFastFoodOutline className='text-3xl'/>
            </div>
            <p className="mb-8 leading-relaxed">
              Welcome to Flavor Fusion! where every bite is an experience.
               Step into a warm, inviting atmosphere filled with vibrant flavors 
               and cozy comfort. We are here to make your food journey unforgettable!
            </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  <a href="/components/menu" className='flex gap-2'>Menu<RiMenuSearchLine className='text-2xl'/></a>
                </button>
            </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Hero