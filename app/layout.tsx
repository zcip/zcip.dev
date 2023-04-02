import "./globals.css"
import "./app.css"

import Link from "next/link"

export const metadata = {
  title: "Home",
  description: `zcip's website`,
  icons: {
    // TODO: svg等の妥当なfaviconを設定する
    //
    icon: "/icon.png",
  },
  other: {
    "Hatena::Bookmark": "nocomment",
  },
}
function Header() {
  return (
    <header className="w-screen h-24 flex items-center p-6">
      <nav className="w-full h-full flex text-white items-center flex-row">
        <div className="text-white font-medium text-lg">
          <Link href={"/"} className="tracking-wider text-lg text-white">
            zcip
          </Link>
        </div>
        <div className="flex w-full justify-center items-center">
          <ul className="flex gap-2 w-auto text-lg text-gray-300">
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/typescript" className="hover:text-white">
                TypeScript
              </Link>
            </li>
            <li>
              <Link href="/til" className="hover:text-white">
                TIL
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>
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
            zcip.web
          </Link>
          <p className="mb-6 text-gray-500 text-sm tracking-normal">
            常にクリエイティブな解決策を模索し、新しいアイデアを実現することに情熱を注いでいます。
          </p>
          <ul className="mb-2 px-6 flex flex-row gap-4">
            <li>
              <a href="https://twitter.com/zcip">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/zcip">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h2 className="mb-6 font-semibold text-gray-700">Sitemap</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/til">Today I Learned</Link>
            </li>
            <li>
              <a href="/sitemap.xml">Sitemap.xml</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html>
      <body className="bg-gray-900 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 mx-auto pt-4 max-w-3xl w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
