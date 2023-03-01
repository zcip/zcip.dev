import { json } from "../codeSandboxes"
import CodeSandboxPreview from "../CodeSandboxPreview"

export default function Page({ params }: { params: { slug: string } }) {
  const codeSandboxData = json.find((x) => x.id === params.slug)

  if (!codeSandboxData) {
    return null
  }

  return <CodeSandboxPreview {...codeSandboxData} />
}
