import "server-only"
import { load } from "cheerio"

export async function scrapeMetadata(targetUrl: string) {
  const response = await fetch(targetUrl)
  const html = await response.text()

  const $ = load(html)
  const title =
    $('meta[property="og:title"]').attr("content") || $("title").text()
  const description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content")
  // TODO: 取得してからsharpで縮小してもいいか
  const image = $('meta[property="og:image"]').attr("content")

  const icon = $('link[rel="icon"]').attr("href")

  const faviconUrl = icon && new URL(icon, targetUrl).toString()

  const host = new URL(targetUrl).host

  return {
    title,
    description,
    host,
    image,
    faviconUrl,
  }
}
