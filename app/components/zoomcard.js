import React from 'react';

const ZoomCard = ({ imageSrc, title, description, type, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-105">
      <div className="outer-div flex flex-col items-center relative w-72">
        <div className="p-4 shadow-md bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-xl relative">
          <picture className="rounded-lg overflow-hidden block">
            <img
              className="hover:scale-125 ease-in duration-150"
              src={imageSrc}
              alt={title}
              style={{ width: '100%', height: 'auto' }} // Adjust image size
            />
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1/2 rounded-tr-lg rounded-bl-lg">{type}</div>
          </picture>
          <h1 className="mt-4 mb-2 text-white text-xl font-bold">{title}</h1>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ZoomCard;
