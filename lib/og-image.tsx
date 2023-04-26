/* eslint-disable @next/next/no-img-element */
import fs from "node:fs/promises"
import path from "node:path"
import React from "react"
import satori, { SatoriOptions } from "satori"
import { Resvg } from "@resvg/resvg-js"

type Props = { title: string }

export function OGImage({ title }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "128px",
        paddingRight: "128px",
        backgroundColor: `rgb(15 23 42 / 1)`,
        backgroundImage:
          "linear-gradient(90deg, rgba(251,63,223,1) 0%, rgba(71,107,191,1) 100%)",
        color: "white",
        fontFamily: "Noto Sans JP",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "530px",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "0.5rem",
          position: "relative",
          backgroundColor: "rgba(3, 7, 18, 0.75)",
        }}
      >
        <span
          style={{
            fontSize: "60px",
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          {title}
        </span>
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "80px",
            fontSize: "40px",
          }}
        >
          @zcip
        </div>
      </div>
    </div>
  )
}

export async function generateOGImage(props: Props & { slug: string }) {
  const fontData = await fs.readFile(
    path.join(process.cwd(), `public`, `fonts`, `NotoSansJP-Regular.otf`)
  )
  const satoriOptions: SatoriOptions = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Noto Sans JP",
        data: fontData,
        weight: 700,
        style: "normal",
      },
    ],
    debug: false,
  }
  const svg = await satori(<OGImage title={props.title} />, satoriOptions)
  const resvgJS = new Resvg(svg, {
    fitTo: { mode: "width", value: satoriOptions.width },
  })

  const png = resvgJS.render().asPng()
  const imagePath = path.join(
    process.cwd(),
    "public/images/generated/blog/",
    `og-${props.slug}.png`
  )

  await fs.writeFile(imagePath, png)
}
