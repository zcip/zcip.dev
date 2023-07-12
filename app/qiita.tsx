import postsData from "./qiita.json"

export default function Qiita() {
  return (
    <section>
      <h2 className="font-bold pb-4"># Qiitaに投稿した記事をピックアップ</h2>
      <header className="h-9 flex items-center text-sm text-gray-500">
        <span className="grow">タイトル</span>
        <span>views</span>
      </header>
      <ul>
        {postsData.posts.map((post) => (
          <li key={post.id}>
            <a
              href={`https://qiita.com/akameco/items/${post.id}`}
              className="flex items-center py-3 tracking-wide hover:bg-gray-800 border-y border-gray-800"
            >
              <span className="grow text-sm text-gray-100 pr-2">
                {post.title}
              </span>
              <span className="text-xs tracking-widest">
                {new Intl.NumberFormat().format(post.views)}
              </span>
            </a>
          </li>
        ))}
        <li>
          <a
            href={`https://qiita.com/akameco/`}
            className="flex items-center gap-2 justify-center py-3 tracking-wide hover:bg-gray-800 border-y border-gray-800"
          >
            <span>Qiitaで他の記事を見る →</span>
            <span className="text-xs">195 posts</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
