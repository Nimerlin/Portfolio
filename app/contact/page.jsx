import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex text-lg flex-col justify-center m-4 px-6 py-6 bg-black text-white rounded-lg">
       <h1 className="text-3xl font-bold text-center ">Contact Us</h1>
    <div className="px-8 py-6">
       <form>
        <div className="mb-4 flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black text-white"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black text-white"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      </div>
    </div>

  );
};

export default ContactForm;