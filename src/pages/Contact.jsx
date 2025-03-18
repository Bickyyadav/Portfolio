import React, { useState } from 'react';
import Footer from '../components/footer';

const Contact = () => {
  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: '',
  });
  console.log('🚀 ~ Contact ~ contact:', contact);

  const handleInputChanges = e => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value })); //dynamic value hya jisematch karega usiko update kartahya
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    alert(`Username: ${contact.username}\nEmail: ${contact.email}\nMessage: ${contact.message}`);
  };

  return (
    <div>
      <div className="max-w-4xl  mx-auto pt-20 px-4  ">
        <span className="text-4xl">✉️</span>
        <h1 className=" text-3xl  from-neutral-500 font-bold  text-5xl mb-5">Contact Me</h1>
        <p className=" text-lg mb-10 max-w-xl">Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.</p>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col md:flex-row  gap-3  ">
            <input
              className="  bg-neutral-100 px-2 py-2 w-full "
              value={contact.username}
              onChange={handleInputChanges}
              type="text"
              name="username"
              required
              autoComplete="off"
              placeholder="Your Name"
            />

            <input
              className=" bg-neutral-100 px-2 py-2 w-full "
              type="email"
              value={contact.email}
              onChange={handleInputChanges}
              name="email"
              required
              autoComplete="off"
              placeholder="Your email address"
            />
          </div>

          <textarea className=" row-span-full h-56 bg-neutral-100 mt-6 w-full  px-2 py-2" value={contact.message} onChange={handleInputChanges} name="message" placeholder="contact"></textarea>
          <button className="w-full bg-neutral-100 mt-5 px-3 py-1">Submit</button>
        </form>
      </div>
      <div className=' mt-60'>
        <Footer/>
    </div>
    </div>
  );
};

export default Contact;
