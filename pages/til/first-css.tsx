import { NextPage } from "next";

const FirstCss: NextPage = () => {
  return (
    <div className="root">
      <div className="about">
        ブログっぽいのでマークダウンで書きたいところだが、とりあえずすすめるために新しいページを用意する。
        デフォルトで導入されているので、styled-jsxの書き味をためそうと思う。
        <a href="https://github.com/vercel/styled-jsx">vercel/styled-jsx</a>
      </div>
      <div className="iframs">
        <iframe
          src="https://codesandbox.io/embed/magic-navigation-menu-indicator-92y4iz?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "80%",
            height: "400px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="Magic Navigation Menu Indicator"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          src="https://codesandbox.io/embed/css-icon-hover-jbhb8v?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "80%",
            height: "400px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="css icon hover"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about {
          padding: 20px;
        }
        .iframs {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default FirstCss;
