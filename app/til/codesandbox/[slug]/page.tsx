import { json } from "../codeSandboxes"
import CodeSandboxPreview from "../CodeSandboxPreview"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props) {
  const codeSandboxData = json.find((x) => x.id === params.slug)

  return { title: codeSandboxData?.title }
}

export default function Page({ params }: Props) {
  const codeSandboxData = json.find((x) => x.id === params.slug)

  if (!codeSandboxData) {
    return null
  }

  return <CodeSandboxPreview {...codeSandboxData} />
}

export async function generateStaticParams() {
  const slugs = json.map((x) => {
    return { slug: x.id }
  })
  return slugs
}
