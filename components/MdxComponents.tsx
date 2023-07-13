/* eslint-disable jsx-a11y/alt-text */
import { Tweet, type TweetProps, type TweetComponents } from "react-tweet"
import Image from "next/image"
import LinkCard from "./LinkCard"
import { HR } from "./hr"
import { A } from "./a"
import { P } from "./p"

const tweetComponents: TweetComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
}

function TweetImpl(props: TweetProps) {
  return (
    <div className="not-prose">
      <Tweet {...props} components={tweetComponents} />
    </div>
  )
}

export const components = {
  Tweet: TweetImpl,
  LinkCard,
  Image,
  a: A,
  hr: HR,
  p: P,
}
