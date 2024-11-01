"use client";
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

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
	status: string;
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
	};
	const mergedOptions = { ...defaultOptions, ...options };

	const [emblaRef, emblaApi] = useEmblaCarousel({ ...defaultOptions }, [Autoplay({ delay: 3000 })]);
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
	return (
		<section className="embla !py-[6rem]">
			<div className="flex flex-wrap items-center justify-center w-full mb-[6rem]">
				<div className="relative lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
					<h2 className="block w-full bg-gradient-to-b from-white to-white text-[#3d3838] text-center bg-clip-text font-bold text-3xl sm:text-4xl">Popular New Cars</h2>
					<span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-[140px] h-[2px] bg-[#6F68EC]"></span>
				</div>
			</div>

			<div className="relative mx-5" ref={emblaRef}>
				<div className="embla__container">
					{reviews.map((car) => (
						<div className="embla__slide" key={car.id}>
							<div className="min-w-full rounded-lg cursor-pointer relative group border border-solid shadow-lg grid grid-col-3 transition-all duration-300 ease-in-out transform hover:scale-105">
								<div className="bg-white rounded-lg w-full">
									{/* Image and Sale Badge */}
									<div className="relative">
										<Image className="rounded w-full object-cover object-center mb-6 hover:rounded-lg" src={car.imgSrc} alt={car.carName} width={350} height={200} />
										{car.discountPrice && (
											<div className="absolute p-2 top-1 right-2 flex justify-center items-center text-center text-white">
												<h6 className="bg-black py-1 w-16 text-center cursor-pointer">SALE</h6>
											</div>
										)}
									</div>

									{/* Car Info */}
									<div className="px-5 pb-5 flex flex-col gap-2">
										<h2 className="text-sm font-semibold text-gray-900">{car.carName}</h2>

										<div className="flex items-center gap-2">
											<strong className="text-sm font-normal text-[#272727] truncate">{car.model}</strong>
											<span className="text-gray-900 font-bold w-1.5 h-1.5 mx-2 rounded-full bg-gray-400"></span>
											<p className="text-base text-[#6d6d6d] font-normal">{car.running}</p>
										</div>

										<hr className="mt-2 pt-1.5" />

										<div className="flex items-center gap-2">
											{car.discountPrice && <p className="text-base font-normal text-[#6d6d6d] line-through">{car.discountPrice}</p>}
											<h6 className="text-lg font-medium text-[#272727]">{car.actualPrice}</h6>
										</div>

										<div className="flex items-center mt-1 gap-1">
											<p className="text-base font-normal text-[#6d6d6d]">or</p>
											<p className="text-sm font-normal text-[#6d6d6d] underline">{car.biweekly}</p>
										</div>

										<span className="text-xs font-normal text-[#6d6d6d] mt-1">+ {car.hst}</span>
									</div>

									{/* Hover Overlay */}
									<div className="absolute z-50 inset-0 h-[54%] rounded-2  flex justify-center items-center bg-black bg-opacity-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease ">
										<Link href="/vehicle-details">
											<button className="bg-[#6b5fff] p-3 cursor-pointer rounded-lg">View Details</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Buttons */}
				<div className="absolute top-1/2 -left-10 -right-10 z-10 flex justify-between items-center -translate-y-1/2 px-5">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} fillColor="#ffffff" className="border w-14 text-white !bg-[#6b5fff] rounded-full" />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} fillColor="#ffffff" className="border w-8 h-8 text-white !bg-[#6b5fff] rounded-full" />
				</div>
			</div>

			<div className="embla__controls">
				{/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton key={index} onClick={() => onDotButtonClick(index)} className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")} />
					))}
				</div>
			</div>
			<div className="flex justify-center items-center mt-10">
				<button className="!text-white bg-[#6b5fff] hover:bg-[#6b5fff]/90 rounded-[5px] px-20 py-4 text-[20px] font-bold tracking-[0.02857em] leading-6 ">See more cars</button>
			</div>
		</section>
	);
};

export default CarListCarousel;
