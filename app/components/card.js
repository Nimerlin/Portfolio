import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="outer-div flex justify-center items-center">
      <div className="inner-div bg-gray-900 p-4 shadow-lg bg-[#23262b] m-4 border-[#2e2f36] border-4  rounded-lg relative w-72 h-96">
        <img
          src={imageSrc}
          alt="Card Image"
          className="w-full rounded-lg h-48 object-cover cursor-pointer transform transition-transform duration-300 ease-in-out border border-gray-300 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">Tag</div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-opacity-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
          <p className="text-xl font-semibold text-center transition-transform duration-300 ease-in-out transform -translate-y-full hover:translate-y-0">Hover Text</p>
        </div>
        <div className="relative mt-4">
          <h3 className="text-white text-xl font-semibold mb-2 text-center">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>

    
  );
};

export default Card;