const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const width = 1200
const height = null
const quality = 80

// @see https://github.com/vercel/next.js/blob/bd8d7c61f7ada8340a528906239ad330e5b96cbf/packages/next/src/server/image-optimizer.ts#L398
async function optimizeImage(buffer) {
  const transformer = sharp(buffer, { sequentialRead: true })
  transformer.rotate()

  // resize
  if (height) {
    transformer.resize(width, height)
  } else {
    transformer.resize(width, undefined, {
      withoutEnlargement: true,
    })
  }

  // webpへ変換
  transformer.webp({ quality })
  const optimezedBuffer = await transformer.toBuffer()
  return optimezedBuffer
}

async function main() {
  const filePath = process.argv[2]
  const buffer = fs.readFileSync(filePath)

  fs.writeFileSync(
    path.join(
      path.dirname(filePath),
      `${path.basename(filePath, path.extname(filePath))}.webp`,
    ),
    await optimizeImage(buffer),
  )
}

main()
