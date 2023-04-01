import Link from 'next/link';

export default function dashboard() {
  return (
    <>
      <h2>dashboard</h2>
      <Link href="/profile">Profile</Link>
      <Link href="/cashout">Cashout</Link>
      <Link href="/cashin">cashin</Link>
      <Link href="/withdraw">Withdraw</Link>
      <Link href="/token">Help Token</Link>
      <Link href="/bonus">Bonus</Link>
      <Link href="/refer">Referel</Link>
      <Link href="/logout">Logout</Link>
    </>
  )
}