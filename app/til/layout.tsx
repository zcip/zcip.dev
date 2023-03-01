export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="items-center w-max justify-center flex-col">{children}</div>
  )
}
