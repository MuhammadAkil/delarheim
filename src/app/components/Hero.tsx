import React from 'react'

import HeroImg from '../public/images/Hero Section.jpg'
import Image from 'next/image';

export default function Hero() {
  return (
    <>
    <div className="relative w-full h-[566px] overflow-hidden">
      
     <Image
        src={HeroImg}
        alt="Hero"
        layout="fill" // This ensures the image covers the parent container
        objectFit="cover" // This maintains the aspect ratio and covers the entire area
        className="absolute top-0 left-0"
      />
              {/* Overlay Text */}
              
              <div className="absolute top-[50px] lg:bottom-[230px] left-0 w-full text-center p-6 from-black to-transparent text-white">
  <div className="flex flex-col justify-center items-center mx-auto">
            <div>
            <h2 className='text-xl font-bold lg:text-4xl mb-32 mt-7 lg:mt-0 '>Find the best Deal for you today!.</h2>
            </div>    <div className="[&_div]:cursor-pointer flex lg:flex-row flex-col gap-5 justify-center items-center mx-auto">
    <div className="w-[250px] h-[65px] backdrop-blur-md bg-[#18746c]/80 p-3 rounded-lg border border-white/20 shadow-lg transition-all duration-300 transform hover:bg-[#18746c]/90 hover:shadow-xl hover:scale-105 flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-lg font-semibold text-white flex items-center gap-2">
          Buy a Car
        </h1>
          <span className="bg-white rounded-full p-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#18746c" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
      </div>
      <div className="w-[250px] h-[65px] backdrop-blur-md bg-[#18746c]/80 p-3 rounded-lg border border-white/20 shadow-lg transition-all duration-300 transform hover:bg-[#18746c]/90 hover:shadow-xl hover:scale-105 flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-lg font-semibold text-white flex items-center gap-2">
          Sell a Car
        </h1>
          <span className="bg-white rounded-full p-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#18746c" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
      </div>
    </div>
  </div>
</div>



    </div>
    </>
  )
}
