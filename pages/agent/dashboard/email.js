// import Input from '@/components/Input'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Dashboard from './index.js';
import { Alert } from 'flowbite-react';

export default function Email() {
  const router = useRouter();
  const [email, setEmail] = useState({});
  const [message, setMessage] = useState(null);
  const handleEmailChange = (e) => {
    setEmail({ ...email, email: e.target.value })
  }

  const handleSubjectChange = (e) => {
    setEmail({ ...email, subject: e.target.value })
  }

  const handleTextChange = (e) => {
    setEmail({ ...email, text: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const response = await axios.post("http://localhost:3000/agent/sendemail", email);
      setEmail(response.data);
      setMessage("Email sent successful");
    }
    catch (error) {
      // router.push('/');
      setMessage("Something went wrong!");
      console.log(error.message);
    }
  }

  return (
    <>
      <div className='flex flex-row py-10 justify-center'>
        <div className='basis-1/4 bg-gray-900 rounded mr-5'>
          <Dashboard />
        </div>
        <div className='basis-full bg-gray-400 rounded px-10 py-10'>
          <h2 className='text-4xl font-extrabold mb-5'>Send Email</h2>

          <form onSubmit={handleSubmit}>
            <p className="mt-2 text-xs text-blue-600"> <span className="font-medium">{message}</span></p>

            <label htmlFor="email">Email</label> <br />
            <input type="email" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="email" name="email" onChange={handleEmailChange} /> <br />

            <label htmlFor="subject">Subject</label> <br />
            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="subject" name="subject" onChange={handleSubjectChange} /> <br />

            <label htmlFor="text">Message</label> <br />
            <textarea type="text" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="text" name="text" onChange={handleTextChange} /> <br />

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Send</button>
          </form>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>

    </>
  )
}
