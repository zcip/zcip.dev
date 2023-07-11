import postsData from "./qiita.json"

// Qiitaの記事のリスト
export default function Qiita() {
  return (
    <div>
      <ul>
        {postsData.posts.map((post) => (
          <li key={post.id}>
            <a href={`https://qiita.com/akameco/items/${post.id}`}>
              <span>{post.title}</span>
              <span>{post.views}</span>
            </a>
          </li>
        ))}
      </ul>
      <div>
        その他、気になる記事があればqiitaのマイページを見てください。
        ただし、情報が古い可能性があるので、注意してください。
        <a href="https://qiita.com/akameco" target="_blank">
          qiita.com/akameco
        </a>
      </div>
    </div>
  )
}
