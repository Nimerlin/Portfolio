
import React from 'react'
import Blogcard from '../components/blogcard'

const Blog = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2  ">
        <Blogcard 
        imageSrc="/images/profile/devops-img.gif" 
        title="Blog 1" 
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."  />

        <Blogcard 
        imageSrc="/images/profile/devops-img.gif" 
        title="Blog 2" 
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."  />

        <Blogcard 
        imageSrc="/images/profile/devops-img.gif" 
        title="Blog 3" 
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."  />
       
      </div>
  )
}

export default Blog