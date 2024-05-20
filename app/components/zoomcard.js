
import React from 'react';

const ZoomCard = ({ imageSrc, title, description }) => {
  return (
    <div className="outer-div flex flex-col items-center relative">
    <div className="p-4 w-72 shadow-md bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-xl relative">
      <picture className="rounded-lg overflow-hidden block">
        <img
          className="hover:scale-125 ease-in duration-150"
          src={imageSrc}
        />
      <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1/2 rounded-tr-lg rounded-bl-lg">Certificates</div>
      </picture>
      
      <h1 className="mt-4 mb-2 text-white text-xl font-bold">{title}</h1>
      <p className="text-sm text-gray-600">
      {description}
      </p>
    </div>
    </div>
  );
};

export default ZoomCard;