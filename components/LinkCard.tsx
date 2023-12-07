/* eslint-disable @next/next/no-img-element */
import { scrapeMetadata } from "@/lib/fetch-metadata"
import { Suspense } from "react"

type Props = { href?: string }

export default function LinkCard(props: Props) {
  return (
    <Suspense>
      {/* @ts-ignore: Async components are valid in the app directory */}
      <LinkCardImpl {...props} />
    </Suspense>
  )
}

export async function LinkCardImpl({ href }: Props) {
  if (!href) {
    return (
      <a
        href={href}
        target="_brank"
        rel="noopener noreferrer"
        // className="not-prose w-full flex flex-row items-center transition border-2 rounded-lg border-gray-600 hover:bg-gray-700 h-[132px] overflow-hidden p-0  no-underline relative"
      >
        {href}
      </a>
    )
  }
  const { title, description, image, host, faviconUrl } = await scrapeMetadata(
    href,
  )
  return (
    <a
      href={href}
      target="_brank"
      rel="noopener noreferrer"
      className="not-prose w-full flex flex-row items-center transition border-2 rounded-lg border-gray-600 hover:bg-gray-700 h-[132px] overflow-hidden p-0  no-underline relative mb-4"
    >
      <div className="flex-1 flex flex-col w-full flex-wrap items-start px-3 gap-1">
        <span className="text-lg m-0 p-0 line-clamp-1 tracking-tight text-white">
          {title ? title : href}
        </span>
        {description && (
          <div className="text-sm text-gray-400 line-clamp-2">
            {description}
          </div>
        )}

        <div className="flex flex-row gap-2">
          {faviconUrl ? (
            <img
              src={faviconUrl}
              alt=""
              loading="lazy"
              width={16}
              height={16}
              className="fill-white object-contain"
            />
          ) : null}
          <span className="text-gray-100 text-sm">{host}</span>
        </div>
      </div>
      <div className="h-[132px] max-w-[264px] aspect-[2/1]">
        <img
          src={image}
          width={200}
          alt=""
          loading="lazy"
          className="object-cover m-0 p-0 w-full h-full"
        />
      </div>
    </a>
  )
}
