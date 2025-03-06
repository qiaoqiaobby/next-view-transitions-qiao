import { Header } from "@/app/ui/header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="grid gap-12 py-12">
      <Header isCollapsed={false} />

      <div className="grid gap-5 grid-cols-3">
        <div className="text-lg font-medium col-span-full">Youtube videos</div>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="aspect-video bg-gray-800/70 rounded-lg" />
        ))}
      </div>

      <div className="grid gap-5 grid-cols-3">
        <div className="text-lg font-medium col-span-full">
          Conference talks
        </div>

        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="aspect-video bg-gray-800/70 rounded-lg" />
        ))}
      </div>

      <div className="grid gap-5 grid-cols-3">
        <Link
          href="/blog"
          className="text-lg font-medium col-span-full hover:text-white"
        >
          Blog posts
        </Link>
        {Array.from({ length: 3 }).map((_, index) => {
          const id = index + 1
          return (
            <Link
              href={`/blog/${id}`}
              className="aspect-video bg-gray-800/70 rounded-lg hover:bg-gray-800"
            />
          )
        })}
      </div>
    </div>
  )
}
