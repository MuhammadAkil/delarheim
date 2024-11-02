"use client";

import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const ContactUs = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="relative flex flex-col items-center py-5 lg:flex-row lg:items-start">
				{/* Background and clip-path */}
				<div className="absolute inset-0 bg-[#6b5fff] clip-path-background"></div>

				<div className="relative xl:left-[20%] z-10 text-center px-4 flex flex-col items-center text-white">
					<h2 className="text-2xl font-bold py-5">Contact Us</h2>

					<div className="grid grid-cols-1 gap-4 w-full max-w-[30rem] mx-auto">
						<p className="col-span-1 px-3 lg:col-span-3">
							We are available 24 hours a day, 7 days a week. Chat with us, call us at <strong>1 (888) 606-0614</strong> or ask us a question. We are also available on Facebook, Messenger, WhatsApp, and Instagram.
						</p>
					</div>

					<div className="mt-5 space-y-2 w-full max-w-[20rem] mx-auto flex flex-col items-center lg:flex-row lg:space-x-2 lg:space-y-0">
						<button className="bg-[rgb(11,34,96)] hover:bg-[#0b2260] text-white py-2 px-4 rounded-[20px] w-full lg:w-auto">Call Us</button>
						<button className="bg-[rgb(11,34,96)] hover:bg-[#0b2260] text-white py-2 px-4 rounded-[20px] w-full lg:w-auto">Chat Now</button>
						<button className="bg-[rgb(11,34,96)] hover:bg-[#0b2260] text-white py-2 px-4 rounded-[20px] w-full lg:w-auto">Ask Us</button>
					</div>
				</div>

				{/* Image on right side */}
				<div className="relative h-[300px] w-[350px] rounded-[20px] overflow-hidden mt-5 lg:mt-0 lg:h-[300px] lg:w-[300px] lg:ml-auto lg:right-6 top-[20px]">
					<Image src="/images/info-1.jpg" alt="Right Side" layout="fill" className="object-cover" />
				</div>
			</div>

			<div className="py-16">
				<div className="relative inline-block text-center w-full">
					<h1 className="block w-full bg-gradient-to-b from-white to-white text-[#3d3838] bg-clip-text font-bold text-3xl sm:text-4xl">Ask a Question</h1>
					<span className="absolute left-1/2 bottom-[-10px] transform -translate-x-1/2 w-[140px] h-[2px] bg-[#6F68EC]"></span>
				</div>

				<div className="p-6 rounded-lg">
					{" "}
					{/* max-w-lg mx-auto   (agr to ap form chota krna chah rhy hain) */}
					<form className="container">
						<div className="flex flex-col space-y-4">
							<label className="font-bold">
								Full Name <span className="text-red-500">*</span>
							</label>
							<input type="text" placeholder="Full Name" className="border border-gray-300 p-2 rounded-md w-full" required />

							<label className="font-bold">
								Email Address <span className="text-red-500">*</span>
							</label>
							<input type="email" placeholder="Email Address" className="border border-gray-300 p-2 rounded-md w-full" required />

							<label className="font-bold">
								Phone Number <span className="text-red-500">*</span>
							</label>
							<input type="tel" placeholder="Phone Number" className="border border-gray-300 p-2 rounded-md w-full" required />

							<label className="font-bold">
								Subject <span className="text-red-500">*</span>
							</label>
							<input type="text" placeholder="Subject" className="border border-gray-300 p-2 rounded-md w-full" required />

							<label className="font-bold">
								Your Message <span className="text-red-500">*</span>
							</label>
							<textarea placeholder="Your Message" rows={4} className="border border-gray-300 p-2 rounded-md w-full" required />
						</div>
						<p className="text-gray-500 text-sm mt-2">
							This site is protected by reCAPTCHA and the
							<span className="text-[#0870d8] hover:underline cursor-pointer"> Google Privacy </span>
							and the
							<span className="text-[#0870d8] hover:underline cursor-pointer"> Terms of Service </span>
							apply.
						</p>
						<button className="text-white py-2 px-4 rounded-md mt-4 bg-[#6b5fff] hover:bg-[#6b5fff]/90">Send your message</button>
					</form>
				</div>
			</div>

			{/* Additional Contact Heading */}

			<div className="relative inline-block text-center w-full mb-7">
				<h1 className="block w-full bg-gradient-to-b from-white to-white text-[#3d3838] bg-clip-text font-bold text-3xl sm:text-4xl">You can also contact us via:</h1>
				<span className="absolute left-1/2 bottom-[-10px] transform -translate-x-1/2 w-[140px] h-[2px] bg-[#6F68EC]"></span>
			</div>

			{/* Icons for WhatsApp, Facebook, Instagram */}
			<div className="flex justify-center space-x-16 mb-10">
				<a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
					<FaWhatsapp className="text-4xl text-green-500 hover:text-green-600 transition duration-300" />
				</a>
				<a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
					<FaFacebook className="text-4xl text-blue-600 hover:text-blue-700 transition duration-300" />
				</a>
				<a href="https://www.instagram.com/yourinstapage" target="_blank" rel="noopener noreferrer">
					<FaInstagram className="text-4xl text-pink-700 hover:underline cursor-pointer hover:text-pink-700 transition duration-300" />
				</a>
			</div>
		</div>
	);
};

export default ContactUs;
