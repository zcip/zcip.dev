export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="container mx-auto pt-4 max-w-3xl flex-1">{children}</div>
  )
}
