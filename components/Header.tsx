import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href={"/"} legacyBehavior>
            zcip
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/til" legacyBehavior>
              TIL
            </Link>
          </li>
          <li>
            <Link href="/blog" legacyBehavior>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .header {
          width: 100vw;
          height: calc(4px * 24);
          background: #252525;
          display: flex;
          align-items: center;
          padding: 24px;
        }
        nav {
          width: 100%;
          height: 100%;
          display: flex;
          color: white;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.2em;
          color: white;
        }
        ul {
          display: flex;
          gap: 8px;
        }
      `}</style>
    </header>
  )
}
