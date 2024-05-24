
import React from 'react'
import Blogcard from '../components/blogcard'

const Blog = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Blogcard imageSrc="/images/profile/devops-img.gif" />
        <Blogcard imageSrc="/images/profile/devops-img.gif" />
        <Blogcard imageSrc="/images/profile/devops-img.gif" />
      </div>
    </div>
  )
}

export default Blog