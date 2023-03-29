/** @see https://rehype-pretty-code.netlify.app/ */
/** @type {import('rehype-pretty-code').Options} */
export const prettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: true,
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted")
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"]
  },
}
