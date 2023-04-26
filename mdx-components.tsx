import { components as mdxComponents } from "./components/MdxComponents"

export function useMDXComponents(components: any[]) {
  return { ...mdxComponents, ...components }
}
