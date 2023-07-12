type Props = React.PropsWithChildren<{}>

export function P({ children }: Props) {
  return <p className="my-5 [blockquote_&]:my-2">{children}</p>;
}
