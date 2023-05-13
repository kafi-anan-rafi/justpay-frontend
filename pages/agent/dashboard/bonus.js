import SessionCheck from '@/components/SessionCheck';
import { Alert } from 'flowbite-react';

export default function Bonus() {
  return (
    <>
      <SessionCheck />
      <Alert color="info">Alert!</Alert>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
      <h2 className='bg-blue-500 text-white p-4'>Bonus</h2>
    </>
  )
}