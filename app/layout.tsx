import "./globals.css"
import StyledJsxRegistry from "./registry"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}
