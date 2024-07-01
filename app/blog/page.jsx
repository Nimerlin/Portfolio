'use client';

import React, { useState, useEffect } from 'react';
import Blogcard from '../components/blogcard';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/json/blogsData.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error loading blogs:', error));
  }, []);

  return (
    <div className="flex text-lg flex-col px-8 justify-center text-white rounded-3xl">
      <h1 className="text-3xl font-bold pt-7">Blogs</h1>
      <div className="my-2.5 h-1.5 w-16 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4">
        {blogs.map((blog, index) => (
          <div className="p-4" key={index}>
            <Blogcard
              imageSrc={blog.imageSrc}
              title={blog.title}
              desc={blog.desc}
              url={blog.url} // Pass the URL from JSON data
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
