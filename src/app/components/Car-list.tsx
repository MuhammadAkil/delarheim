"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const CarList = () => {
  const cars = [
    {
      carName: "2018 Audi Q7",
      model: "3.0T Progressiv AWD",
      running: "61,394 km",
      discountPrice: "",
      actualPrice: "$33,790",
      biweekly: "$293 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2020 Volkswagen Jetta",
      model: "Highline",
      running: "87,676 km",
      discountPrice: "$18,790",
      actualPrice: "$21,490",
      biweekly: "$150 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2017 Lexus NX 200t",
      model: "Base AWD",
      running: "98,796 km",
      discountPrice: "",
      actualPrice: "$26,490",
      biweekly: "$253 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2017 GMC Sierra 1500",
      model: "SLE Double Cab 4x4",
      running: "55,520 km",
      discountPrice: "$30,790",
      actualPrice: "$31,990",
      biweekly: "$309 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/8e5ff679-2441-4bd4-9c2e-2431fadaf48a.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2019 Honda Odyssey",
      model: "EX-L Navi",
      running: "104,626 km",
      discountPrice: "$30,990",
      actualPrice: "$34,590",
      biweekly: "$270 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2022 Toyota Corolla",
      model: "LE w/ Upgrade Pkg",
      running: "83,585 km",
      discountPrice: "$22,990",
      actualPrice: "$23,990",
      biweekly: "$165 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2020 Chevrolet Spark",
      model: "1LT",
      running: "17,642 km",
      discountPrice: "",
      actualPrice: "$18,490",
      biweekly: "$136 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2023 Volkswagen Tiguan",
      model: "Black Edition AWD",
      running: "55,525 km",
      discountPrice: "$31,990",
      actualPrice: "$32,990",
      biweekly: "$226 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2018 Mercedes-Benz C-Class",
      model: "C 300 4Matic AWD",
      running: "60,737 km",
      discountPrice: "$24,990",
      actualPrice: "$26,990",
      biweekly: "$220 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/8e5ff679-2441-4bd4-9c2e-2431fadaf48a.jpg?class=extra_small",
      status: "SALE"
    },
    {
      carName: "2019 Volvo S60",
      model: "T6 AWD R-Design",
      running: "99,004 km",
      discountPrice: "",
      actualPrice: "$27,990",
      biweekly: "$233 /biweekly",
      hst: "HST & Licensing",
      imgSrc: "https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
      status: "SALE"
    },
  ];


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
      prevSlide === Math.ceil(cars.length / itemsPerSlide) - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Math.ceil(cars.length / itemsPerSlide) - 1 : prevSlide - 1
    );
  };

  return (
    <section className="text-gray-600 body-font max-w-screen-lg  mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center justify-center w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
            <h2 className="block w-full bg-gradient-to-b from-white to-white text-[#18746c] text-center bg-clip-text font-bold text-3xl sm:text-4xl">
              Popular New Cars
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 text-white bg-[#18746c] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6 rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"

            >
              {cars.map((car, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] flex justify-center p-4"
                >
                  <div className="bg-gray-100 rounded-lg w-full">
                    <div className="relative group">
                      <Image
                        className="rounded w-full object-cover object-center mb-6 hover:rounded-lg"
                        src={car.imgSrc}
                        alt={car.carName}
                        width={350}
                        height={200}
                      />
                      {car.discountPrice && (
                        <div className="absolute top-0 right-0 flex justify-center items-center text-center text-white ">
                          <h6 className="bg-black py-1 w-16 text-center cursor-pointer">
                            SALE
                          </h6>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease ">
                        <span className="bg-[#18746c] p-3 cursor-pointer rounded-lg ">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Car Info */}
                    <div className="px-5 pb-5 flex flex-col gap-2">
                      <h2 className="text-sm font-semibold text-gray-900">
                        {car.carName}
                      </h2>

                      <div className="flex items-center gap-2">
                        <strong className="text-sm font-normal text-[#272727] truncate">
                          {car.model}
                        </strong>
                        <span className="text-gray-900 font-bold w-1.5 h-1.5 mx-2 rounded-full bg-gray-400"></span>
                        <p className="text-base font-normal">{car.running}</p>
                      </div>

                      <hr className="mt-2 pt-1.5" />

                      <div className="flex items-center gap-2">
                        {car.discountPrice && (
                          <p className="text-base font-normal text-[#6d6d6d] line-through">
                            {car.discountPrice}
                          </p>
                        )}
                        <h6 className="text-lg font-medium text-[#272727]">
                          {car.actualPrice}
                        </h6>
                      </div>

                      <div className="flex items-center mt-1 gap-1">
                        <p className="text-base font-normal text-[#6d6d6d]">or</p>
                        <p className="text-sm font-normal text-[#6d6d6d] underline">
                          {car.biweekly}
                        </p>
                      </div>

                      <span className="text-xs font-normal text-[#6d6d6d] mt-1">
                        + {car.hst}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 text-white bg-[#18746c] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots for Slide Navigation */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(cars.length / itemsPerSlide) }).map(
            (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-2 rounded-full cursor-pointer ${index === currentSlide ? "bg-[#18746c]" : "bg-gray-400"
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CarList;
