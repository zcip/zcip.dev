import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
