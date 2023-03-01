"use client"

import Link from "next/link"
import Header from "../../../components/Header"
import { json as data } from "./codeSandboxes"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Header />
      <div className="flex">
        <ul>
          {data.map((x) => (
            <li key={x.title}>
              <Link href={`/til/first-css/${encodeURIComponent(x.id)}`}>
                {x.title}
              </Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .flex {
          display: flex;
          flex-direction: row;
          width: 100%;
          padding: 20px;
        }
        .root ul {
          width: 240px;
        }
        .root ul li {
          width: 100%;
          list-style: none;
          min-height: 24px;
          word-wrap: break-word;
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
  )
}
