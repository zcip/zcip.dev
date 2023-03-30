import "./globals.css"
import "./app.css"

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

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html>
      <body className="bg-gray-900">
        <Header />
        {children}
      </body>
    </html>
  )
}
