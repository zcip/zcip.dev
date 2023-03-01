"use client"

import { json as data } from "./codeSandboxes"
import CodeSandboxPreview from "./CodeSandboxPreview"

export default function Page() {
  return (
    <div className="iframs">
      {data.map((x) => (
        <CodeSandboxPreview title={x.title} src={x.src} id={x.id} key={x.id} />
      ))}
      <style jsx>
        {`
          .iframs {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
          }
        `}
      </style>
    </div>
  )
}
