import React from 'react';

const ZoomCard = ({ imageSrc, title, description }) => {
  return (
    <div className="outer-div flex flex-col items-center relative">  
      <div className="relative overflow-hidden rounded-lg object-cover cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-110 w-72">
        <img
          src={imageSrc}
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">Tag</div>
      </div>
      <div className="relative mt-4 text-center">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ZoomCard;