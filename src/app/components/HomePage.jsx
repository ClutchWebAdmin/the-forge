"use client";
import Link from "next/link";
import { lexend } from "../styles/fonts";
import InstagramFeed from "./InstagramFeed";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleAccordion = (index) => {

    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="overview"
      className={`${lexend.className} bg-white p-5 lg:p-10 flex flex-col gap-4 lg:gap-8 justify-center items-center text-black`}
    >
      {/* WHO IS THE FORGE Section */}
      <div className={`${lexend.className} w-full grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 lg:py-20 items-start`}>

        {/* Left Column: Accordions */}
        <div className="flex flex-col gap-6 lg:col-span-1">

        {[
          {
            title: "WEALTH & FINANCE",
            content:
              "The top floor is home to Anthem Strategists, a sophisticated environment where financial acumen meets visionary planning.",
          },
          {
            title: "THE WOMEN'S COLLECTIVE",
            content:
              "Our female-led sanctuary features salons, wellness studios, and Clink!—a French restaurant re-imagining the art of gathering.",
          },
          {
            title: "FOOD, WINE, & RETAIL",
            content:
              "Through our main doors, indulge in a tapestry of taste and style, where specialty coffee, ice cream, and boutique finds await.",
          },
          {
            title: "EVENTS & ENTERTAINMENT",
            content:
              "Descending to the lower level, an evolving event space will soon host refined gatherings and exclusive moments.",
          },
        ].map((item, index, array) => {
          const displayNumber = array.length - 1 - index;

          return (
            <div key={index} className="relative pr-12"> {/* padding for number space */}
              {/* Number badge */}
              <div className="absolute left-full text-xl opacity-50 text-black">
                {displayNumber}
              </div>

              <div className="border border-gray-300 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-center p-4 bg-white hover:bg-gray-100 transition"
                >
                  {item.title}
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 whitespace-pre-line bg-white text-gray-800">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}


        </div>

        {/* Right Column: Description and Image */}
        <div className="flex flex-col items-center text-center lg:text-left gap-4 lg:col-span-2">

          <h2 className="text-3xl lg:text-5xl text-black">WHO IS THE FORGE?</h2>
          <p className="text-base lg:text-md text-gray-700 m">
            Think of The Forge as Salem’s lifestyle collective, where each floor offers a curated experience, rich in style and vibrant community.
          </p>
          <div className="w-full mt-4 overflow-hidden">
            <Image
              src="/images/forge-BlackAndWhite.png" // Replace with actual image
              alt="The Forge building"
              width={800}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Info Banner Section */}
      <div className="relative w-full text-white h-auto">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background-image.jpg"
            alt="Liberty Plaza background"
            fill
            className="object-cover "
            priority
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 lg:p-12 text-sm lg:text-base ">
          {/* Visit */}
          <div className="flex flex-col gap-2 bg-gray-700 opacity-70 p-10 m-6">
            <h2 className="text-xl font-bold uppercase text-new-light">Visit</h2>
            <p>OPEN BY APPOINTMENT ONLY</p>
            <p>
              HOURS<br />
              MON - SAT | 8:30 AM - 5 PM<br />
              CLOSED SUNDAYS
            </p>
            <p>
              LOCATION:<br />
              285 Liberty St NE<br />
              Salem, OR 97301
            </p>
            <p className="font-semibold">ENTER THROUGH MAIN DOORS ONLY</p>
          </div>

          {/* Updates */}
          <div className="flex flex-col gap-2 bg-gray-700 opacity-70 p-10 m-6">
            <h2 className="text-xl font-bold uppercase text-new-light">Updates</h2>
            <p className="font-semibold">OPENING TO PUBLIC SUMMER 2025</p>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2 bg-gray-700 opacity-70 p-10 m-6">
            <h2 className="text-xl font-bold uppercase text-new-light">Connect</h2>
            <p>CONTACT US</p>
            <p>LEASING<br />CONTACT OUR REAL ESTATE PARTNER - TRADITION REP</p>
            <p>FOLLOW our journey on socials</p>
            <ul className="list-none pl-0">
              <li>INSTAGRAM: @theforgesalem</li>
              <li>FACEBOOK: @theforgesalem</li>
              <li>TIKTOK: @theforgesalem</li>
            </ul>
            <p className="font-semibold">PROGRESS REPORT:<br />for each floor<br />Coming soon items</p>
          </div>
        </div>
      </div>

      {/* Instagram & Map Section */}
      <div
        className="w-full flex flex-col items-center py-10 lg:py-20"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="w-full flex flex-col lg:flex-row gap-0 overflow-hidden border-t border-new-light shadow-md mt-10">
          {/* Instagram Feed */}
          <div className="w-full lg:w-2/3 bg-new-light p-6 flex flex-col items-center justify-center text-center gap-6">
            <div>
              <h2
                className={`${lexend.className} text-2xl lg:text-4xl text-white tracking-wide mb-4`}
              >
                Stay Updated with Our Progress and News
              </h2>
              <p className="text-sm lg:text-base text-black max-w-2xl mx-auto">
                Follow our journey as we bring new life to Liberty Plaza! Stay connected to see the latest updates, milestones, and exciting news about The Forge.
              </p>
            </div>
            <div className="w-full">
              <InstagramFeed />
            </div>
          </div>

          {/* Sidebar Map Section */}
          <div className="w-full lg:w-1/3 bg-black/90 p-6 flex flex-col justify-start border-t border-new-light lg:border-t-0 lg:border-l text-center gap-6">
            <h2
              className={`${lexend.className} text-2xl lg:text-4xl text-new-light tracking-wide`}
            >
              Visit The Forge
            </h2>
            <p className="text-sm lg:text-base text-white">
              285 Liberty Street, Salem, Oregon 97301
            </p>
            <div className="mx-auto rounded-xl overflow-hidden border border-white shadow-inner shadow-white m-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.081984705924!2d-123.04104102339316!3d44.94200127107028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bfff0d1bde0df7%3A0x5aa28f2a05aaa1fa!2s285%20Liberty%20St%20NE%2C%20Salem%2C%20OR%2097301!5e0!3m2!1sen!2sus!4v1730225839465!5m2!1sen!2sus"
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
