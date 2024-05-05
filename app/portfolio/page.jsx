import React from 'react';
import { FaGripLines } from "react-icons/fa";
import ZoomCard from '../components/zoomcard';
import Card from '../components/card';

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center m-4 px-6 py-6 bg-black text-white rounded-lg">
      <h1 className="text-3xl font-bold text-center">Portfolio</h1>
      <div className="flex justify-center mt-4 mb-8">
        <FaGripLines className="text-4xl" />
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