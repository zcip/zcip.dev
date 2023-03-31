import "./globals.css"
import "./app.css"

import Link from "next/link"
import Header from "../components/Header"

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

function Footer() {
  return (
    <footer className="p-4 mt-20 max-w-4xl mx-auto">
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
      <body className="bg-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
