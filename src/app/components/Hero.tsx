import React from 'react'
import Image from "next/image";

export default function Hero() {
	return (
		<>
			<div className="relative w-full h-[566px] overflow-hidden">
				<Image
					src="/images/hero-bg.jpg"
					alt="Hero"
					layout="fill" // This ensures the image covers the parent container
					objectFit="cover" // This maintains the aspect ratio and covers the entire area
					className="absolute top-0 left-0 backdrop-blur-lg"
				/>
				{/* Overlay Text */}

				<div className="absolute top-[40px] lg:bottom-[230px] left-0 w-full text-center p-6 from-black to-transparent text-white">
					<div className="flex flex-col justify-center items-center mx-auto">
						<div className="">
							<h2 className=" p-3 text-xl font-semibold lg:text-4xl mb-3 mt-7 lg:mt-0 text-shadow">
								Smarter Deals, Faster Sales - Your <br className="hidden md:block" /> Confident Path to Buying or <br className="hidden md:block" />
								Selling a Car
							</h2>
						</div>
						<div className="mt-10 [&_div]:cursor-pointer flex lg:flex-row flex-col gap-5 justify-center items-center mx-auto">
							<div className="w-[250px] h-[65px] backdrop-blur-md bg-[#6b5fff]/80 p-3 rounded-lg border border-white/20 shadow-lg transition-all duration-300 transform hover:bg-[#6b5fff]/90 hover:shadow-xl hover:scale-105 flex items-center justify-between gap-4">
								<h1 className="text-xl md:text-lg font-semibold text-white flex items-center gap-2">Buy a Car</h1>
								<span className="bg-white rounded-full p-1 transition-all duration-300">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6b5fff" className="w-6 h-6">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
								</span>
							</div>
							<div className="w-[250px] h-[65px] backdrop-blur-md bg-[#6b5fff]/80 p-3 rounded-lg border border-white/20 shadow-lg transition-all duration-300 transform hover:bg-[#6b5fff]/90 hover:shadow-xl hover:scale-105 flex items-center justify-between gap-4">
								<h1 className="text-xl md:text-lg font-semibold text-white flex items-center gap-2">Sell a Car</h1>
								<span className="bg-white rounded-full p-1 transition-all duration-300">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6b5fff" className="w-6 h-6">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
