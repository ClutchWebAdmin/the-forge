"use client";

import { useState } from "react";
import Image from "next/image";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import collective1 from "../../../public/images/Carousel1.jpg";
import collective2 from "../../../public/images/Carousel2.jpg";
import collective3 from "../../../public/images/Carousel3.jpg";
import collective4 from "../../../public/images/Carousel4.jpg";
import collective5 from "../../../public/images/Carousel5.jpg";
import collective6 from "../../../public/images/Carousel6.jpg";
import collective7 from "../../../public/images/Carousel7.jpg";


export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const photos = [
        {
            image: collective1,
            alt: "collective",
        },
        {
            image: collective2,
            alt: "collective",
        },
        {
            image: collective3,
            alt: "collective",
        },
        {
            image: collective4,
            alt: "collective",
        },
        {
            image: collective5,
            alt: "collective",
        },
        {
            image: collective6,
            alt: "collective",
        },
        {
            image: collective7,
            alt: "collective",
        },

    ];
    const length = photos.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    const selectSlide = (index) => {
      setCurrent(index);
    };
  
    return (
      <div className="gap-4 lg:w-4/5 items-center justify-center bg-collectivePink-light pt-4">
        <div className="w-full h-[75vh] relative overflow-hidden rounded-lg">
          <button
            className="absolute top-1/2 left-3 z-10 p-2 bg-transparent hover:bg-collectivePink-dark border border-primaryLight hover:border-collectivePink-dark transition-colors duration-200 ease-in text-primaryLight hover:bg-gray-200 text-4xl rounded-full h-fit w-fit transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <GoChevronLeft />
          </button>
          {photos.map((item, index) => (
            <div
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === current ? "translate-x-0" : "translate-x-full"
              }`}
              key={index}
            >
              {index === current && (
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="object-cover w-full h-full rounded-lg"
                  placeholder="blur"
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
          ))}
          <button
            className="absolute top-1/2 right-3 z-10 p-2 bg-transparent hover:bg-collectivePink-dark border border-primaryLight hover:border-collectivePink-dark transition-colors duration-200 ease-in text-primaryLight hover:bg-gray-200 text-4xl rounded-full h-fit w-fit transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <GoChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-3 w-full">
          {photos.map((item, index) => (
            <button
              key={index}
              className={`relative w-full aspect-square rounded-md ${
                index === current
                  ? "border-2 border-collectivePink-dark"
                  : "border border-transparent"
              }`}
              onClick={() => selectSlide(index)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="object-cover w-full h-full rounded"
                placeholder="blur"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }