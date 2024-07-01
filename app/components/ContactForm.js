import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setPopupMessage('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' }); // Reset form data
    } else {
      setPopupMessage('Failed to send email.');
    }

    setShowPopup(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000); // Hide the popup after 5 seconds
  };

  return (
    <div className="flex text-lg flex-col px-8 justify-center text-white rounded-3xl">
      <h1 className="text-3xl font-bold pt-7">Contact Us</h1>
      <div className="my-2.5 h-1.5 w-16 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#23262b] border-[#2e2f36] border-2 text-white"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#23262b] border-[#2e2f36] border-2 text-white"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none rounded w-full py-2 px-3 bg-[#23262b] border-[#2e2f36] border-2 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </div>
        </form>
        {showPopup && (
          <div div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 text-black p-8 rounded shadow w-3/4 max-w-lg text-center">
            {popupMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
