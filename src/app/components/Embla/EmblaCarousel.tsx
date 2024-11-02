"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

type ReviewType = {
  id: number;
  date: string;
  name: string;
  photo: string;
  rating: number;
  body: string;
};

type PropType = {
  reviews: ReviewType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
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
		<section className="embla">
			<div className="">
				<div className="embla__buttons flex justify-end">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
			<div className="embla__viewport mx-5" ref={emblaRef}>
				<div className="embla__container">
					{reviews.map((review) => (
						<div className="embla__slide" key={review.id}>
							<div className="p-4 border rounded-md shadow-lg bg-white">
								<div className="flex flex-col items-center justify-center space-y-2">
									<div className="flex flex-shrink-0 rounded-full border border-gray-200">
										<img className="w-8 h-8 object-cover rounded-full" src={review.photo} alt={review.name} />
									</div>
									<span className="text-sm font-semibold leading-5 text-gray-900">{review.name}</span>
								</div>

								<p className="my-2 text-sm text-center font-medium leading-5 text-gray-500">{review.date}</p>

								<div className="space-y-2">
									<p className="text-sm font-medium leading-5 text-gray-600">{review.body}</p>

									<a className="group text-[#262626] font-semibold text-[14px] flex hover:text-[#6b5fff] cursor-pointer gap-2">
										Learn More
										<svg className="group-hover:text-[#6b5fff] group-hover:fill-[#6b5fff]" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
