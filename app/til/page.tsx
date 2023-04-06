import Link from "next/link"
import Image from "next/image"
import heroPic from "../../public/til/til.webp"

export default function TilPage() {
  return (
    <div className="text-gray-300 max-w-3xl lg:max-w-4xl flex flex-col w-full pt-20">
      <div className="w-full m-auto">
        <h1 className="font-bold text-6xl mb-16">
          TODAY I LERANED
          <span className="font-light pl-4 text-3xl">... or not?</span>
        </h1>
        <Image src={heroPic} alt="" className="rounded-lg mb-20" />
        <section className="block shadow border border-l rounded-lg p-6 mb-12">
          <h2 className="mb-6 text-xl">
            <span className="text-2xl">
              <strong>TODAY I LERANED</strong> (TIL)
            </span>
            とは何か？
          </h2>
          <p className="text-gray-400 leading-loose">
            「TIL (Today I
            Learned)」とは、毎日少なくとも1つのことを学び、それを短い文で記録し、共有する活動です。
            主にGitHubやTwitter、Blog等で、自分が学んだことを書いたり、コードのサンプルをシェアしたりすることが一般的です。
            この運動の重要な意義は、「継続すること」です。毎日の短い投稿を通して、自分自身の成長を促進し、新しい知識やスキルを継続的に獲得することができます。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl border-l-4 border-pink-600 pl-4 font-bold">
            気楽にやろう
          </h2>
          <p className="text-gray-300 leading-loose">
            とはいえ、毎日活動するというのは疲れるし、やりたくありません。そのためここは輝かしい毎日の記録の場所でありません。
            何かしら手を動かした痕跡を残す。それだけの場所です。
            もしかしたら、明日の自分か1年後の自分。それか顔も知らない誰かの役に立つかも知れない。
            未完成のコード等の断片がここにはあります。
            もしここのコードをコピーしてそれが動かなくても責任は取りません。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl border-l-4 border-pink-600 pl-4 font-bold">
            リンク
          </h2>
          <div>
            <ul>
              <li>
                主にデザインについて。写経が多いです。
                <span className="px-2">-</span>
                <Link
                  href="/til/codesandbox"
                  className="text-gray-100 hover:border-b-2 hover:border-pink-700 hover:text-white"
                >
                  til/CodeSandbox
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
