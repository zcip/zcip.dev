import Link from "next/link"

export default function Header() {
  return (
    <header className="w-screen h-24 bg-gray-800 flex items-center p-6">
      <nav className="w-full h-full flex text-white items-center flex-row justify-between">
        <div className="text-white font-medium text-lg">
          <Link href={"/"} className="tracking-wider text-lg">
            zcip
          </Link>
        </div>
        <ul className="flex gap-2">
          <li>
            <Link href="/til">TIL</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
