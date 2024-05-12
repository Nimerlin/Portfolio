import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="p-4 m-8 w-72 shadow-md bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-xl relative overflow-hidden m-auto mt-36">
      <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1/2 rounded-tr-lg rounded-bl-lg z-10">Certificates</div>
      <div className="relative group">
        <img
          className="hover:scale-125 ease-in duration-150"
          src={imageSrc}
          alt="Teamwork"
        />
        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
        <div className="absolute bg-gradient-to-t w-full h-1/2 transform duration-500 inset-y-full group-hover:-inset-y-0">
          <div className="absolute w-full flex place-content-center bottom-0 inset-x-0 group-hover:-bottom-1/2">
            <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white">Team work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;