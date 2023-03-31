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
    <footer className="p-4 mt-20 max-w-5xl mx-auto">
      <nav className="grid grid-cols-2 gap-4">
        <div className="pb-3 block p-4 border rounded-lg">
          <Link href="/" className="mb-4 block text-gray-300 shadow">
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
        <div>Sitemap</div>
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
