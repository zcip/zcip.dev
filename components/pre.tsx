type Props = { children: React.ReactNode }

export function Pre({ children }: Props) {
  return <pre className="p-3 border">{children}</pre>
}
