"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

type ReviewType = {
    id: number;
  carName: string;
  model: string;
  running: string;
  actualPrice: string;
    discountPrice: string;
    biweekly: string;
    hst: string;
    imgSrc: string;
    status:string
};

type PropType = {
  reviews: ReviewType[];
  options?: EmblaOptionsType;
};

const CarListCarousel: React.FC<PropType> = (props) => {
    const { reviews, options } = props;
    
    const defaultOptions: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
  }
  const mergedOptions = { ...defaultOptions, ...options }

  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
      <section className="embla !my-20  ">
           <div className="flex flex-wrap items-center justify-center w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
            <h2 className="block w-full bg-gradient-to-b from-white to-white text-[#18746c] text-center bg-clip-text font-bold text-3xl sm:text-4xl">
              Popular New Cars
            </h2>
          </div>
        </div>

    <div className="embla__viewport relative mx-5" ref={emblaRef}>
  <div className="embla__container">
    {reviews.map((car) => (
      <div className="embla__slide" key={car.id}>
        <div className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] flex justify-center">
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
                <div className="absolute top-0 right-0 flex justify-center items-center text-center text-white">
                  <h6 className="bg-black py-1 w-16 text-center cursor-pointer">
                    SALE
                  </h6>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease">
                <span className="bg-[#18746c] p-3 cursor-pointer rounded-lg">
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
                <p className="text-base text-[#6d6d6d] font-normal">{car.running}</p>
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
      </div>
    ))}
  </div>

  {/* Prev and Next Buttons */}
  <div className=" absolute z-50 -inset-5 flex justify-between items-center ">
    <PrevButton
      onClick={onPrevButtonClick}
      disabled={prevBtnDisabled}
      className="absolute left-0 z-10  border  text-white !bg-white rounded-full"
    />
    <NextButton
      onClick={onNextButtonClick}
      disabled={nextBtnDisabled}
      className="absolute right-0 z-10 border  text-white !bg-white rounded-full"
    />
  </div>
</div>

     
    </section>
  );
};

export default CarListCarousel;
