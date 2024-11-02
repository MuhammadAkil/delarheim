"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    date: "12 Sep 2023",
    
    name: "Carrie Brewer",
    photo: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
    rating: 5,
    body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    
  },
  {
    id: 2,
    date: "2 March 2024",
    
    name: "Carrie Brewer",
    photo: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
    rating: 3,
    body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    
  },
  {
    id: 3,
    date: "06 Dec 2019",
    name: "Carrie Brewer",
    photo: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
    rating: 4,
    body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    
  }
  ,
  {
    id: 4,
    date: "2 March 2024",
    
    name: "Carrie Brewer",
    photo: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
    rating: 3,
    body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    
  },
  {
    id: 5,
    date: "06 Dec 2019",
    name: "Carrie Brewer",
    photo: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
    rating: 4,
    body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    
  },
  {
    id: 6,
    date: "06 Dec 2019",
    name: "Carrie Brewer",
    photo: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
    rating: 4,
    body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    
  }
  
];

export default function Rating() {
   const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); 
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); 
      } else {
        setItemsPerSlide(1); 
      }
    };

    window.addEventListener("resize", updateItemsPerSlide);
    updateItemsPerSlide();

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(reviews.length / itemsPerSlide) - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Math.ceil(reviews.length / itemsPerSlide) - 1 : prevSlide - 1
    );
  };
    return (
			<div className="antialiased flex flex-col min-h-[550px] pt-8 pb-12 mx-auto max-w-[1080px]">
				<div className="flex flex-wrap items-center justify-center w-full mb-20">
					<div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
						<h2 className="block w-full bg-gradient-to-b from-white to-white bg-clip-text text-[#18746c] text-center font-bold text-3xl sm:text-4xl">4.8 stars, 2000+ reviews</h2>
					</div>
				</div>
				<div className="flex mb-3 gap-2 items-center justify-end">
					<button onClick={prevSlide} className=" p-3 text-white bg-[#18746c] rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6 rotate-180">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
					{/* Next Slide Button */}
					<button onClick={nextSlide} className=" p-3 text-white bg-[#18746c] rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
				<div className="overflow-hidden w-full">
					<div className="flex gap-3 transition-transform duration-500 ease-in-out">
						{/* <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3"> */}
						{reviews.map((review) => (
							<div key={review.id} className="min-w-[100%] md:min-w-[50%] lg:min-w-[32.38%]  p-4 border rounded-md shadow-lg bg-white">
								<div className=" flex flex-col items-center justify-center space-y-2">
									<div className="flex flex-shrink-0 rounded-full border border-gray-200">
										<Image className="w-8 h-8 object-cover rounded-full" src={review.photo} alt="Reviewer" width={32} height={32} />
									</div>
									<span className="text-sm font-semibold leading-5 text-gray-900">{review.name}</span>
								</div>

								<p className="my-2 text-sm text-center font-medium leading-5 text-gray-500">{review.date}</p>
								<div className="space-y-2">
									<p className="text-sm font-medium leading-5 text-gray-600">{review.body}</p>

									<a
										className="group text-[#262626] font-semibold text-[14px] flex hover:text-[#18746c] cursor-pointer gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#18746c]
"
									>
										Learn More
										<svg className="group-hover:text-[#18746c] group-hover:fill-[#18746c]" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
											<path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
										</svg>
									</a>
								</div>
								<div className="flex space-b-0.5 mt-4">
									{[...Array(5)].map((_, i) => (
										<svg key={i} className={`w-5 h-5 ${i < review.rating ? "text-yellow-300" : "text-gray-300"}`} fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24">
											<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
										</svg>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
}
