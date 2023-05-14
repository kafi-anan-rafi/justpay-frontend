import SessionCheck from '@/components/SessionCheck';
import { Alert } from 'flowbite-react';
import Dashboard from '../index.js';
import { useRouter } from 'next/router.js';
import axios from 'axios';

export default function Bonus({ balance }) {
  const router = useRouter();
  return (
    <>
      <div className='flex flex-row py-10 justify-center'>
        <div className='basis-1/4 bg-gray-900 rounded mr-5'>
          <Dashboard />
        </div>

        <div className='basis-full bg-gray-200 rounded px-10 py-10'>
          <h2 className='text-2xl font-extrabold mb-3'>Bonus</h2>
          <p>Bonus balance: {balance} tk</p>
          <button type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </>
  )
}
export const getServerSideProps = async (context) => {
  const id = context.params.bonusId;

  const res = await axios.get("http://localhost:3000/agent/info/bonus/" + id);
  const balance = await res.data;
  return {
    props: { balance }
  }
}