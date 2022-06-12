import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <img src="/images/logo.png" alt="logo" width={150} height="auto" />
      </a>
    </Link>
  )
}
