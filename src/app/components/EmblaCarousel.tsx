"use client";

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './EmblaCarousel.module.css';
import Image from 'next/image';

interface EmblaCarouselProps {
  reviews: any[]; // This could be an array of images or data
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ reviews }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla} >
      <div className="embla" ref={emblaRef}>
       
      <div className="embla__container flex gap-3">
        {reviews.map((review) => (
          <div key={review?.id} className="embla__slide min-w-[100%] md:min-w-[50%] lg:min-w-[33.3333%] p-4">
            <div className="border rounded-md shadow-lg bg-white p-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full border border-gray-200 overflow-hidden">
                  <Image
                    className="w-8 h-8 object-cover rounded-full"
                    src={review.photo}
                    alt="Reviewer"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {review.name}
                </span>
              </div>
              <p className="my-2 text-sm text-center text-gray-500">
                {review.date}
              </p>
              <p className="text-sm text-gray-600">{review.body}</p>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-300" : "text-gray-300"
                    }`}
                    fill={i < review.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     <div className="flex justify-end">
            <button className={styles.embla__button} onClick={scrollPrev}>
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
      <button className={styles.embla__button} onClick={scrollNext}>
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
    </div>
  );
};

export default EmblaCarousel;
