import "./globals.css"
import Header from "../components/Header"

export const metadata = {
  title: "Home",
  description: `zcip's website`,
  meta: {
    name: "description",
    content: "zcip website",
  },
  link: {
    rel: "icon",
    href: "/favicon.ico",
  },
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
