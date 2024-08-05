import Link from "next/link"
import Image from "next/image"
import Logo from './helpdesk-logo.png'

export default function Navbar() {
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
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}