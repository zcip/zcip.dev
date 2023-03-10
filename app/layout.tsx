import "./globals.css"
import "./app.css"

import Header from "../components/Header"

export const metadata = {
  title: "Home",
  description: `zcip's website`,
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "Hatena::Bookmark": "nocomment",
  },
}

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
