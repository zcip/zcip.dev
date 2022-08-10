import { NextPage } from "next";
import Link from "next/link";

const TilPage: NextPage = () => {
  return (
    <div>
      <Link href="/til/first-css">はじめてのcss</Link>
      <Link href="/til/first-mdx">はじめてのmdx</Link>
    </div>
  );
};

export default TilPage;
