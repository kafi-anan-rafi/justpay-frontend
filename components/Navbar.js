import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Go Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}