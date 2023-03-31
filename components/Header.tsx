import Link from "next/link"
import React from "react"

const Li = ({ children }: React.PropsWithChildren<{}>) => (
  <li className="text-lg text-gray-300">{children}</li>
)

export default function Header() {
  return (
    <header className="w-screen h-24 flex items-center p-6">
      <nav className="w-full h-full flex text-white items-center flex-row">
        <div className="text-white font-medium text-lg">
          <Link href={"/"} className="tracking-wider text-lg text-white">
            zcip
          </Link>
        </div>
        <div className="flex w-full justify-center items-center">
          <ul className="flex gap-2 w-auto">
            <Li>
              <Link href="/typescript" className="hover:text-white">
                TypeScript
              </Link>
            </Li>
            <Li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </Li>
            <Li>
              <Link href="/til" className="hover:text-white">
                TIL
              </Link>
            </Li>
            <Li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </Li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
