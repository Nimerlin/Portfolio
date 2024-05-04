import React from 'react';
import { FaGripLines, FaCode, FaCreativeCommonsRemix  } from "react-icons/fa";
import Card from '../components/card';
import ZoomCard from '../components/card';

const Portfolio = () => {
  return (
    <>

      <div className="flex text-lg flex-col justify-center m-4 px-6 py-6 bg-black text-white rounded-lg">
       <h1 className="text-3xl font-bold text-center ">Portfolio</h1>
       <div> <FaGripLines className=" size-14 w-full"/></div>
       <ZoomCard
        imageSrc="/images/profile/devops-img.gif"
        title="Title"
        description="Description goes here..."
      />
        
</div>


        

    
    </>

  )
}

export default Portfolio
