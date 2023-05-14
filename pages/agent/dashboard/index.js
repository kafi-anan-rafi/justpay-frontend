import SessionCheck from '@/components/SessionCheck';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [agentId, setAgentId] = useState();
  useEffect(() => {
    const profileId = sessionStorage.getItem('agentId');
    setAgentId(profileId);
  }, [])

  const router = useRouter()
  return (
    // <div className='flex flex-row py-10'>
    <div className="bg-gray-900">
      <SessionCheck />
      <h4 className="text-3xl font-bold my-5 text-center text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-500">Dashboard</h4>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href={"/agent/dashboard/profile/" + agentId}>Profile</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href={"/agent/dashboard/updateprofile/" + agentId}>Update Profile</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold hover:bg-rounded' href={"/agent/dashboard/balance/" + agentId}>Balance</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href="/agent/dashboard/cashout">Cashout</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href="/agent/dashboard/cashin">Cashin</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href="/agent/dashboard/withdraw">Withdraw</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href="/agent/dashboard/token">Token</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href={"/agent/dashboard/bonus/" + agentId}>Bonus</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href="/agent/dashboard/refer">Referel</Link>
      <Link className='block mt-2 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href="/agent/dashboard/email">Send Email</Link>
      <Link className='block mt-2 mb-5 px-3 py-1 text-white text-center hover:bg-yellow-300 hover:text-gray-900 hover:font-bold' href="/agent/dashboard/getAgent">Search Agent</Link>
    </div>

    // {/* <div className='basis-full bg-gray-400 rounded'>
    //   <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => router.back()}>
    //     Go Back
    //   </button>
    // </div> */}
    // </div>
  )
}