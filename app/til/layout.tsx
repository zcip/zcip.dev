export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="w-full flex justify-center min-h-screen items-start px-2">
      {children}
    </div>
  )
}
