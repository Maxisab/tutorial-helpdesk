import Link from "next/link"
import Image from "next/image"
import Logo from './helpdesk-logo.png'
import LogoutButton from "./LogoutButton"

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt='helpdesk logo. Icon by lutfix'
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {user && <span>Hello, {user}</span>}
      <LogoutButton />
    </nav>
  )
}