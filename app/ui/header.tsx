import { clsx as cx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import profile from "@/app/ui/delba.jpg"
import { NavLink } from "@/app/ui/nav-link"

export interface HeaderProps {
  isCollapsed?: boolean
}

export function Header({ isCollapsed = false }: HeaderProps) {
  return (
    <div
      className={cx("grid grid-cols-[auto_1fr] gap-4", {
        "mt-24": !isCollapsed,
      })}
    >
      <Link href="/">
        <Image
          className={cx("rounded-full", {
            "size-8": isCollapsed,
          })}
          src={profile}
          alt="A profile picture of Delba"
          width={130}
          height={130}
        />
      </Link>

      <div className="grid gap-4 items-center">
        <Link
          href="/"
          className={cx(
            "w-fit font-medium [text-box:trim-both_cap_alphabetic] hover:text-white",
            {
              "text-xl self-center": isCollapsed,
              "text-3xl": !isCollapsed,
            },
          )}
        >
          Delba
        </Link>

        {!isCollapsed ? (
          <div>
            Developer Experience at ▲Vercel. Learning and teaching React,
            Next.js and web concepts through videos, animations, and docs.
          </div>
        ) : null}

        <div
          className={cx("w-fit flex gap-2 items-center", {
            "col-start-2 justify-self-end": isCollapsed,
          })}
        >
          <NavLink href="/">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="https://www.youtube.com/@delba">Youtube</NavLink>
          <NavLink href="https://twitter.com/delba_oliveira">Twitter</NavLink>
        </div>
      </div>
    </div>
  )
}
