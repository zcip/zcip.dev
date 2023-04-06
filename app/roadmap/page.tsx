import Image from "next/image"
import heroPic from "@/public/done_is_better.webp"

export default function RoadmapPage() {
  return (
    <div className="text-gray-300">
      <h1 className="text-white text-4xl mb-10">Roadmap</h1>
      <Image
        src={heroPic}
        alt="Done is better than perfect. 完璧を目指すよりもまず終わらせろ"
        className="rounded-lg mb-10"
      />
      <p className="tracking-wide leading-9 mb-20">
        このWebsiteでしたいことは、たくさんありますが、それを全て実装してしては終わりがないのは明白です。
        「完璧を目指すよりもまずは終わらせろ」の精神でこのWebsiteは永遠のバージョン0.1として、少しずつ
        少しずつ改良して行こうと考えています。
      </p>
      {/* TODO: このWebsiteを解説した記事 */}
      {/* <Link href="/">
        このWebsiteに使われている技術についてはこちらにまとめています
      </Link> */}
      <h2 className="text-3xl mb-4">やるかもしれないRoadmap</h2>
      <ul className="ml-4 gap-3 flex flex-col list-disc">
        <li>埋め込みカードコンポーネント</li>
        <li>Cardコンポーネントの導入</li>
        <li>画像の最適化</li>
        <li>tailwind.cssのカスタマイズ</li>
        <li>アニメーション</li>
        <li>デザインシステムの導入</li>
        <li>RSSの設定</li>
        <li>`Subscribe to my newsletter` の導入</li>
        <li>x OGPの設定</li>
      </ul>
    </div>
  )
}
