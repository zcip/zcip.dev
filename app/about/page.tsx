import Image from "next/image"
import avatarPic from "../../public/icon.png"

export default function AboutPage() {
  return (
    <div className="text-gray-300 px-2 flex flex-col gap-4">
      <section>
        <Image
          src={avatarPic}
          alt="プロフィール画像です"
          className="text-center mx-auto rounded-full mb-20"
        />
        <h1 className="text-4xl mb-20">こんにちは、zcipです。</h1>
        <p>フロントエンドエンジニア2023年からは</p>
      </section>
      <section>
        <h2>Project</h2>
        <p>今まで取り組んだプロジェクトです。</p>
        {/* TODO: リスト */}
      </section>
    </div>
  )
}
