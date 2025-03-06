"use client"
import { clsx as cx } from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cx(
        "text-sm py-1 font-medium text-white rounded-md px-2",
        className,
        {
          "bg-blue-600 hover:bg-blue-500": isActive,
          "bg-gray-600 hover:bg-gray-400": !isActive,
        },
      )}
    >
      {children}
    </Link>
  )
}
