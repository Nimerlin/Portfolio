import React from 'react';
import { FaGripLines } from "react-icons/fa";
import ZoomCard from '../components/zoomcard';
import Card from '../components/card';

const Portfolio = () => {
  return (
    <div className="flex text-lg flex-col px-8  justify-center text-white rounded-3xl">
      <h1 className="text-3xl font-bold pt-7">Portfolio</h1>
      <div className="my-2.5 h-1.5 w-16 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="flex justify-center mt-4 mb-8">
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ZoomCard
          imageSrc="/images/profile/devops-img.gif"
          title="Zoom Card 1"
          description="Description goes here..."
        />
        <ZoomCard
          imageSrc="/images/profile/devops-img.gif"
          title="Zoom Card 2"
          description="Description goes here..."
        />
        <ZoomCard
          imageSrc="/images/profile/devops-img.gif"
          title="Zoom Card 3"
          description="Description goes here..."
        />
        <Card
          imageSrc="/images/profile/devops-img.gif"
          title="Card 1"
          description="Description goes here..."
        />
        <Card
          imageSrc="/images/profile/devops-img.gif"
          title="Card 2"
          description="Description goes here..."
        />
        <Card
          imageSrc="/images/profile/devops-img.gif"
          title="Card 3"
          description="Description goes here..."
        />
      </div>
    </div>
  );
};

export default Portfolio;