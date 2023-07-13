import "./globals.css"
import "./app.css"

import Link from "next/link"
import { GitHubIcon } from "@/components/icons/github"
import { TwitterIcon } from "@/components/icons/twitter"

export const metadata = {
  title: "zcip.dev",
  description: `フロントエンドについての知見を共有します`,
  icons: {
    icon: "/icon.png",
  },
  other: {
    "Hatena::Bookmark": "nocomment",
  },
}

function Header() {
  return (
    <header className="max-w-4xl w-full h-24 p-6">
      <nav className="w-full h-full flex text-white flex-row items-center justify-between">
        <Link
          href={"/"}
          className="block tracking-wider text-lg text-white font-bold"
        >
          zcip.dev
        </Link>
        <ul className="flex gap-2 w-auto text-lg text-gray-300">
          <li>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="p-4 mt-40 max-w-4xl mx-auto">
      <nav className="grid grid-cols-3 gap-4">
        <div className="col-span-2 pb-3 p-4">
          <Link href="/" className="mb-6 inline-block text-gray-300">
            zcip.dev
          </Link>
          <p className="mb-6 text-gray-500 text-sm tracking-normal">
            常にクリエイティブな解決策を模索し、新しいアイデアを実現することに情熱を注いでいます。
          </p>
          <ul className="mb-2 px-6 flex flex-row gap-4 text-white">
            <li>
              <a
                href="https://twitter.com/zcip"
                className="text-gray-200 hover:text-gray-500"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zcip"
                className="text-gray-200 hover:text-gray-500"
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-900 min-h-screen flex flex-col items-center">
        <Header />
        <div className="flex-1 pt-4 max-w-3xl w-full mx-2">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
