/* eslint-disable jsx-a11y/alt-text */
import { Tweet, type TweetProps, type TwitterComponents } from "react-tweet"
import Image, { type ImageProps } from "next/image"
import LinkCard from "./LinkCard"
import { HR } from "./hr"
import { A } from "./a"
import { P } from "./p"
import { H1, H2, H3, H4 } from "./typography"
import { Ul } from "./ul"
import { Li } from "./li"

const tweetComponents: TwitterComponents = {
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
  Image: (props: ImageProps) => <Image {...props} />,
  a: A,
  hr: HR,
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  ul: Ul,
  li: Li,
}
