type Props = React.PropsWithChildren<{ name: string; href: string }>

export function GitHubItem({ name, href, children }: Props) {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="text-xl text-white">{name}</span>
      </a>
      <p>{children}</p>
    </div>
  )
}
