export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="container mx-auto pt-4">
      <div className="prose lg:prose-xl prose-invert">{children}</div>
    </div>
  )
}
