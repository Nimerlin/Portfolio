"use client";

import React, { useEffect, useState } from "react";
import Aboutcard from "../components/about-card";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/json/aboutData.json")
      .then((response) => response.json())
      .then((data) => {
        setAboutData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching About data:", error));
  }, []);

  if (isLoading) {
    return (
      <div className="flex text-lg flex-col px-8 justify-center text-white rounded-3xl">
        <div className="animate-pulse">
          <h1 className="text-3xl font-bold pt-7">Loading...</h1>
          <div className="my-2.5 h-1.5 w-16 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
          <span className="text-base mt-2.5 text-[#aeb0b8]">
            {/* Placeholder text */}
            <div className="h-4 bg-gray-400 rounded mb-2"></div>
            <div className="h-4 bg-gray-400 rounded mb-2"></div>
            <div className="h-4 bg-gray-400 rounded mb-2"></div>
          </span>

          <h1 className="text-3xl font-bold text-left px-2 py-3">Loading...</h1>
          {/* Render skeleton for Aboutcard */}
          <div className="h-48 bg-gray-400 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex text-lg flex-col px-8 justify-center text-white rounded-3xl">
        <h1 className="text-3xl font-bold pt-7">{aboutData.title}</h1>
        <div className="my-2.5 h-1.5 w-16 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
        <span className="text-base mt-2.5 text-[#aeb0b8]">
          {aboutData.subtitle}
          <br />
          <br />
          {aboutData.details.map((detail, index) => (
            <React.Fragment key={index}>
              {detail}
              <br />
              <br />
            </React.Fragment>
          ))}
        </span>

        <h1 className="text-3xl font-bold text-left px-2 py-3">{aboutData.currentTitle}</h1>
        <Aboutcard />
      </div>
    </>
  );
};

export default About;
