import { Image } from 'next/image';
import Dashboard from './index.js';
import { useRouter } from 'next/router.js';
import { useState } from 'react';

export default function Cashout() {
  const router = useRouter();
  const [amount, setAmount] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {

    } catch(error) {

    }
  }
  return (
    <>
      <div className='flex flex-row py-10 justify-center'>
        <div className='basis-1/4 bg-gray-900 rounded mr-5'>
          <Dashboard />
        </div>
        <div className='basis-full bg-gray-200 rounded px-10 py-10'>
          <h2 className='text-2xl font-extrabold mb-5'>Cash out</h2>
          <form onSubmit={handleSubmit}>
            <label for="amount">Amount</label> <br />
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" value={amount} id="amount" name="amount" onChange={(e) => setAmount(e.target.value)} /> <br />

            <label for="email">Email</label> <br />
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" value={email} id="email" name="phone" onChange={(e) => setEmail(e.target.value)} /> <br />

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Cashout
            </button>
          </form>

          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </>
  )
}