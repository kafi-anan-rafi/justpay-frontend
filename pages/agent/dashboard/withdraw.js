import Dashboard from './index.js';
import { useRouter } from 'next/router.js';

export default function Withdraw() {
  const router = useRouter();
  return (
    <div>
      <div className='flex flex-row py-10 justify-center'>
        <div className='basis-1/4 bg-gray-900 rounded mr-5'>
          <Dashboard />
        </div>
        <div className='basis-full bg-gray-400 rounded px-10 py-10'>
          <h1>Withdraw</h1>
          <form>
            <label for="amount">Amount</label> <br />
            <input type="number" id="amount" name="amount" /> <br />

            <label for="phone">Phone</label> <br />
            <input type="text" id="phone" name="phone" /> <br />

            <button type="submit">Withdraw</button>
          </form>

          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
