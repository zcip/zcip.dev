import { visit } from "unist-util-visit"
import type { Root } from "mdast"
import type { Plugin } from "unified"

type Params = { name: string; attributes: Record<string, string> }

function createJsxElement(name: string, attributes: Record<string, string>) {
  const jsxAttrs = Object.entries(attributes).map(([name, value]) => ({
    type: "mdxJsxAttribute",
    name,
    value,
  }))
  return {
    type: "mdxJsxFlowElement",
    name,
    attributes: jsxAttrs,
    children: [],
  }
}

export type TranslateJsx = (params: {
  replaceNodeToJsx: (params: Params) => void
  textValue: string
}) => void

const remarkInjectJsx: Plugin<[TranslateJsx], Root> = (translateJsx) => {
  return (tree) => {
    visit(tree, "paragraph", (node, index, parent) => {
      if (node.children.length !== 1) {
        return
      }
      const child = node.children[0]
      if (!(child && child.type === "text")) {
        return
      }

      const value = child.value

      function replaceNodeToJsx(params: Params) {
        // @ts-ignore
        parent.children[index] = createJsxElement(
          params.name,
          params.attributes
        )
      }

      translateJsx({ replaceNodeToJsx, textValue: value })
    })
  }
}

export default remarkInjectJsx
