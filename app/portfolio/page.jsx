'use client'
import React from 'react';
import { FaGripLines } from "react-icons/fa";
import ZoomCard from '../components/zoomcard';
import { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex text-lg flex-col px-8 justify-center text-white rounded-3xl">
      <h1 className="text-3xl font-bold pt-7">Portfolio</h1>
      <div className="my-2.5 h-1.5 w-16 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="flex justify-center mt-4 mb-8">
        <button
          className={`mx-4 text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 ${activeTab === 'all' ? 'font-bold' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        <button
          className={`mx-4 text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 ${activeTab === 'certifications' ? 'font-bold' : ''}`}
          onClick={() => handleTabClick('certifications')}
        >
          Certifications
        </button>
        <button
          className={`mx-4 text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 ${activeTab === 'projects' ? 'font-bold' : ''}`}
          onClick={() => handleTabClick('projects')}
        >
          Projects
        </button>
        {/* Add more tabs as needed */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <>
            <ZoomCard
              imageSrc="/images/profile/devops-img.gif"
              title="Certificate 1 "
              description="Description goes here..."
              type="certifications"
            />
            <ZoomCard
              imageSrc="/images/profile/devops-img.gif"
              title="Certificate 2 "
              description="Description goes here..."
              type="certifications"
            />
            <ZoomCard
              imageSrc="/images/profile/devops-img.gif"
              title="Certificate 3"
              description="Description goes here..."
              type="certifications"
            />
          </>
        )}
        {(activeTab === 'all' || activeTab === 'projects') && (
          <>
            <ZoomCard
              imageSrc="/images/profile/devops-img.gif"
              title="Project 1"
              description="Description goes here..."
              type="projects"

            />
            <ZoomCard
              imageSrc="/images/profile/devops-img.gif"
              title="Project 2"
              description="Description goes here..."
              type="projects"
            />
            <ZoomCard
              imageSrc="/images/profile/devops-img.gif"
              title="Project 3"
              description="Description goes here..."
              type="projects"
            />
          </>
        )}
        {/* Add more types of cards based on the tabs */}
      </div>
    </div>
  );
};

export default Portfolio;
