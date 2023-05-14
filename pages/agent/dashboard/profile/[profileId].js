import axios from "axios";
import Link from 'next/link';
import { useRouter } from "next/router";
import Dashboard from '../index';

export default function Profile({ agentInfo, id }) {
  const router = useRouter();
  return (
    <>
      <div className='flex flex-row py-10 justify-center'>
        <div className='basis-1/4 bg-gray-900 rounded mr-5'>
          <Dashboard />
        </div>
        <div className='basis-full bg-gray-200 rounded px-10 py-10'>
          <h2 className='text-2xl font-extrabold '>Profile</h2>
          <img className="w-24 h-24 my-4 rounded shadow-md" src={"http://localhost:3000/agent/getimage/" + agentInfo.filename} alt="Profile picture" width="150" height="150" />
          <p className="text-1xl font-extrabold">{agentInfo.name}</p>
          <p className="">{agentInfo.email}</p>
          <p>{agentInfo.phone}</p>
          <p>{agentInfo.address}</p>
          <div className="mt-5">
            <Link href={"/agent/dashboard/updateprofile/" + id} className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Edit Profile
            </Link>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => router.back()}>
              Go Back
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export const getServerSideProps = async (context) => {
  const id = context.params.profileId;
  const res = await axios.get("http://localhost:3000/agent/profile/" + id);
  const agentInfo = await res.data;

  return {
    props: { agentInfo, id }
  }
}