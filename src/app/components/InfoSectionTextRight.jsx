"use client";
import { FiExternalLink } from "react-icons/fi";
import InfoButton from "./InfoButton";
import { Aoboshi_One } from "next/font/google";
import { aoboshiOne } from "../styles/fonts";
import { useState, useEffect } from "react";

export default function InfoSectionTextRight({
  eyebrowText,
  headingText,
  description,
  topBackgroundColor,
  bottomBackgroundColor,
  floorNumber,
  websiteLink,
  websiteText,
  title
}) {

  const descriptionLines = description.split("\n").filter(line => line.trim() !== "");
  const [isLongText, setIsLongText] = useState(false);

  useEffect(() => {
    
    const lines = description.split("\n");

    // Set isLongText based on the number of lines (e.g., more than 5 lines)
    if (lines.length > 20) {
      setIsLongText(true);
    } else {
      setIsLongText(false);
    }
  }, [description]);

  return (
    <div className="flex flex-col items-start justify-between h-auto w-full  md:w-3/5 md:order-last">
      
      <div
        className={`flex-1 flex flex-col gap-6 ${bottomBackgroundColor} w-full h-auto p-10`}
      >
        <h4
          className="text-2xl xl:text-4xl border-b pb-2 w-fit font-medium"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          {title}
        </h4>
        <div className={`text-sm lg:text-base xl:text-2xl ${isLongText ? "columns-4 gap-4" : "columns-1"} `}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true">
        {descriptionLines.map((line, index) => (
          <p key={index} className="mb-2">{line}</p>
        ))}
      </div>
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            className="flex flex-row gap-2 items-center text-lg lg:text-2xl hover:underline decoration-1 underline-offset-4 font-semibold text-blue-300 text-outline"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <FiExternalLink />
            {websiteText}
          </a>
        )}

        <InfoButton />
      </div>
    </div>
  );
}
