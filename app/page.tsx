import Link from "next/link"

function Footer() {
  return (
    <footer className="p-4">
      <nav className="grid grid-cols-2 gap-4">
        <div className="pb-3">
          <Link href="/">zcip.web</Link>
          <p>
            私は常にクリエイティブな解決策を模索し、常に新しいアイデアを実現することに情熱を注いでいます。
            新しい技術を学ぶことが好きで、それを実際のプロダクトに適用することで、現実的な問題に対する創造的な解決策を生み出すことができます。
          </p>
        </div>
        <div>Sitemap</div>
      </nav>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <div className="px-2">
        <main className="flex flex-col justify-center items-center min-h-screen flex-1">
          <Link href="/about">About me</Link>
          <Link href="/til">TODAY I Lerned</Link>
          <Link href="/typescript">TypeScript</Link>
        </main>
        <Footer />
      </div>
    </>
  )
}
