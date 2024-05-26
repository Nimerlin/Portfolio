import React from 'react'
import Blogcard from '../components/blogcard'

const Blog = () => {
  return (
    <div className="flex text-lg flex-col px-8 justify-center text-white rounded-3xl">
      <h1 className="text-3xl font-bold pt-7">Blogs</h1>
      <div className="my-2.5 h-1.5 w-16 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Added mt-6 for margin top */}
        <div className="p-4">
          <Blogcard 
            imageSrc="/images/profile/devops-img.gif" 
            title="Blog 1" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula." 
          />
        </div>
        <div className="p-4">
          <Blogcard 
            imageSrc="/images/profile/devops-img.gif" 
            title="Blog 2" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula." 
          />
        </div>
        <div className="p-4">
          <Blogcard 
            imageSrc="/images/profile/devops-img.gif" 
            title="Blog 3" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula." 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
