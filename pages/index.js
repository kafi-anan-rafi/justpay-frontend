import Slider from '@/components/Slider';
import Link from 'next/link';
import DownloadCard from '@/components/DownloadCard';

export default function Home() {
  return (
    <>
      {/* <Slider /> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome to</span> JustPay.</h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl mb-5">Payment made easier!</p>

          <Link href="/agent/signup" className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Sign up
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
        </div>
        <DownloadCard />
      </div>
    </>
  )
} 