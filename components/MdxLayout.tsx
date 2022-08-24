import React from "react"
import Header from "./Header"

type Props = React.PropsWithChildren

export default function MdxLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
