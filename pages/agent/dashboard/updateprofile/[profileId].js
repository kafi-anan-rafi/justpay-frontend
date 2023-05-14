import { useState, useEffect } from 'react';
import Dashboard from '../index.js';
import { useRouter } from 'next/router.js';
import axios from 'axios';

export default function UpdateProfile({ agentInfo, id }) {
  const router = useRouter();

  useEffect(() => {
    setName(agentInfo.name);
    setAddress(agentInfo.address);
    setEmail(agentInfo.email);
    setPhone(agentInfo.phone);
  }, [])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone)
    formData.append("address", address);
    // formData.append("password", password);
    // formData.append("myfile", data.myfile[0]);

    const response = await axios.patch("http://localhost:3000/agent/updateprofile/" + id, { formData });
    console.log(response);
  };

  return (
    <>
      <div className='flex flex-row py-10 justify-center'>
        <div className='basis-1/4 bg-gray-900 rounded mr-5'>
          <Dashboard />
        </div>
        <div className='basis-full bg-gray-400 rounded px-10 py-10'>
          <h2 className='text-4xl font-extrabold mb-5'>Update Profile</h2>

          <form onSubmit={handleSubmit}>
            <label className='block leading-7 text-gray-900 mt-2'>
              Name:
              <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className='block leading-7 text-gray-900 mt-2'>
              Email:
              <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='block leading-7 text-gray-900 mt-2'>
              Phone Number:
              <input className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className='block leading-7 text-gray-900 mt-2'>
              Address:
              <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <button className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Update Profile</button>
          </form>

          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </>

  );
}


export const getServerSideProps = async (context) => {
  const id = context.params.profileId;
  const res = await axios.get("http://localhost:3000/agent/profile/" + id);
  const agentInfo = await res.data;

  return {
    props: { agentInfo, id }
  }
}
