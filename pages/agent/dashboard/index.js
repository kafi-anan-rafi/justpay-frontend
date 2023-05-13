import SessionCheck from '@/components/SessionCheck';
import Link from 'next/link';

export default function Dashboard() {

  return (
    <>
      {/* <SessionCheck /> */}
      <div>
        <h2>Dashboard</h2>
        <Link href="/agent/dashboard/profile/2">Profile</Link>
        <Link href="/agent/dashboard/cashout">Cashout</Link>
        <Link href="/agent/dashboard/cashin">Cashin</Link>
        <Link href="/agent/dashboard/withdraw">Withdraw</Link>
        <Link href="/agent/dashboard/token">Token</Link>
        <Link href="/agent/dashboard/bonus">Bonus</Link>
        <Link href="/agent/dashboard/refer">Referel</Link>
        <Link href="/agent/dashboard/email">Send Email</Link>
        <Link href="/agent/dashboard/getAgent">Search Agent</Link>
      </div>
    </>
  )
}