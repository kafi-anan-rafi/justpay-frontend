import SessionCheck from '@/components/SessionCheck';
import Link from 'next/link';


export default function Dashboard() {
  const spaceing = {
    margin: 5,
    padding: "2px 10px"
  }

  return (
    <>
      {/* <SessionCheck /> */}
      <Loading />
      <div style={{ float: "left", background: "light", marginRight: 20, padding: "100px 20px" }}>
        <h2>Dashboard</h2>
        <Link style={spaceing} href="/agent/profile/2">Profile</Link>
        <Link style={spaceing} href="/agent/cashout">Cashout</Link>
        <Link style={spaceing} href="/agent/cashin">Cashin</Link>
        <Link style={spaceing} href="/agent/withdraw">Withdraw</Link>
        <Link style={spaceing} href="/agent/token">Token</Link>
        <Link style={spaceing} href="/agent/bonus">Bonus</Link>
        <Link style={spaceing} href="/agent/refer">Referel</Link>
        <Link style={spaceing} href="/agent/email">Send Email</Link>
        <Link style={spaceing} href="/agent/signout">Sign Out</Link>
        <Link style={spaceing} href="/agent/getAgent">Search Agent</Link>
      </div>
    </>
  )
}