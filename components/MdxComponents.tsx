import { Tweet, type TweetProps, type TweetComponents } from "react-tweet"
import Image from "next/image"

const tweetComponents: TweetComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
}

export const components = {
  Tweet: (props: TweetProps) => (
    <div className="not-prose">
      <Tweet {...props} components={tweetComponents} />
    </div>
  ),
}
