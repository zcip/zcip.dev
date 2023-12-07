type Props = { children: React.ReactNode }

export function Ul({ children }: Props) {
  return <ul className="gap-2 mb-4">{children}</ul>
}
