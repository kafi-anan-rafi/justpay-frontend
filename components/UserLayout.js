import Image from 'next/image'
import Link from 'next/link'

export default function UserLayout({ user }) {
  return (
    <>
      <div className='p-28'>
        <div className="mx-auto w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 my-4 rounded-full shadow-md" src={"http://localhost:3000/agent/getimage/" + user.filename} alt="Profile picture" width="200" height="200" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{user.address}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link href={"/agent/dashboard/updateprofile/" + user.id} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}