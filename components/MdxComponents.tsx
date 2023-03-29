import { Tweet, type TweetProps } from "react-tweet"

export const components = {
  Tweet: (props: TweetProps) => (
    <div className="not-prose">
      <Tweet {...props} />
    </div>
  ),
}
