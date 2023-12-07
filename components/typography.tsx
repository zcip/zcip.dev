type Props = { children: React.ReactNode }

export function H1({ children }: Props) {
  return <h1 className="text-4xl text-white pb-4">{children}</h1>
}

export function H2({ children }: Props) {
  return <h2 className="text-3xl text-white pb-4">{children}</h2>
}

export function H3({ children }: Props) {
  return <h3 className="text-2xl text-white">{children}</h3>
}

export function H4({ children }: Props) {
  return <h3 className="text-xl text-white">{children}</h3>
}
