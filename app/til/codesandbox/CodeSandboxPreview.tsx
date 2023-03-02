import React from "react"
import type { CodeSandboxDataType } from "./codeSandboxes"

type CodeSandboxPreviewProps = CodeSandboxDataType

export default function CodeSandboxPreview({
  src,
  title,
}: CodeSandboxPreviewProps) {
  return (
    <iframe
      src={src}
      style={{
        width: "80%",
        height: "400px",
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}
