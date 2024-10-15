"use client";

import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const ContactUs = () => {
    return (
			<div className="max-w-6xl mx-auto">
				<div className="relative flex items-start py-5 ">
					{/* Background and clip-path, hide on small screens */}
					<div className="absolute inset-0 bg-pink-700 clip-path-background hidden lg:block"></div>

					<div className="absolute top-2/2 left-2/2 z-10 text-center px-4 flex flex-col items-center lg:text-white text-black lg:static" style={{ marginLeft: "11em" }}>
						<h2 className="text-2xl font-bold py-5">Contact Us</h2>

						<div className="grid grid-cols-3 gap-4 w-full max-w-[30rem] mx-auto hidden lg:block">
							<p className="col-span-3 px-3">
								We are available 24 hours a day, 7 days a week. Chat with us, call us at <strong>1 (888) 606-0614</strong> or ask us a question. We are also available on Facebook, Messenger, WhatsApp, and Instagram.
							</p>
						</div>

						<div className="space-y-4 w-full max-w-[20rem] mx-auto hidden lg:block">
							<button className="bg-[rgb(11,34,96)] hover:bg-[#0b2260] text-white py-2 px-4 rounded-[20px] mx-2">Call Us</button>
							<button className="bg-[rgb(11,34,96)] hover:bg-[#0b2260] text-white py-2 px-4 rounded-[20px] mx-2">Chat Now</button>
							<button className="bg-[rgb(11,34,96)] hover:bg-[#0b2260] text-white py-2 px-4 rounded-[20px] mx-2">Ask Us</button>
						</div>
					</div>

					{/* Image on right side, hide on small screens */}
					<div className="relative h-[300px] w-[300px] rounded-[30px] overflow-hidden ml-auto absolute hidden lg:block" style={{ top: "40px", right: "140px" }}>
						<Image src="/images/info-1.jpg" alt="Right Side" layout="fill" className="object-cover" />
					</div>
				</div>

				<div className="py-16">
					<h1 className="text-4xl font-semibold my-6 text-center">Ask a Question</h1>
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
								<span className="text-pink-600"> Google Privacy </span>
								and the
								<span className="text-pink-600"> Terms of Service </span>
								apply.
							</p>
							<button className="text-white py-2 px-4 rounded-md mt-4" style={{ backgroundColor: "#FF0550" }}>
								Send your message
							</button>
						</form>
					</div>
				</div>

				{/* Additional Contact Heading */}
				<h2 className="text-2xl font-semibold my-6 text-center mb-6">You can also contact us via:</h2>

				{/* Icons for WhatsApp, Facebook, Instagram */}
				<div className="flex justify-center space-x-16 mb-10">
					<a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
						<FaWhatsapp className="text-4xl text-green-500 hover:text-green-600 transition duration-300" />
					</a>
					<a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
						<FaFacebook className="text-4xl text-blue-600 hover:text-blue-700 transition duration-300" />
					</a>
					<a href="https://www.instagram.com/yourinstapage" target="_blank" rel="noopener noreferrer">
						<FaInstagram className="text-4xl text-pink-600 hover:text-pink-700 transition duration-300" />
					</a>
				</div>
			</div>
		);
};

export default ContactUs;
