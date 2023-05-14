import { useRouter } from "next/router";
import { useState } from "react";
import Dashboard from './index.js';
import UserLayout from "@/components/UserLayout.js";
import axios from 'axios';

export default function GetAgent({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'getAgent',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
      <div className='flex flex-row py-10 justify-center'>
        <div className='basis-1/4 bg-gray-900 rounded mr-5'>
          <Dashboard />
        </div>
        <div className='basis-full bg-gray-200 rounded px-10 py-10'>
          <form onSubmit={handleFormSubmit}>
            <h2 className='text-2xl font-extrabold mb-5'>Search Agent!</h2>

            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Search</button>
          </form>
          {data.status !== null ? <UserLayout user={data} /> : ''}
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const name = query.inputValue;
  try {
    const response = await axios.get('http://localhost:3000/agent/profile/' + name);
    const data = await response.data;
    console.log(data);
    return {
      props: {
        data
      }
    };

  } catch (error) {
    return {
      props: {
        data: { status: null }
      }
    };
  }
}