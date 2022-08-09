import { NextPage } from "next";

const FirstCss: NextPage = () => {
  return (
    <div>
      <div className="root">
        ブログっぽいのでマークダウンで書きたいところだが、とりあえずすすめるために新しいページを用意する。
        デフォルトで導入されているので、styled-jsxの書き味をためそうと思う。
      </div>

      <style jsx>{`
        .root {
          margin: 20px;
        }
      `}</style>
    </div>
  );
};

export default FirstCss;
