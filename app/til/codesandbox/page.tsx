import { json as data } from "./codeSandboxes"
import CodeSandboxPreview from "./CodeSandboxPreview"

export const metadata = {
  title: "CodeSandbox",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {data.map((x) => (
        <CodeSandboxPreview title={x.title} src={x.src} id={x.id} key={x.id} />
      ))}
    </div>
  )
}
