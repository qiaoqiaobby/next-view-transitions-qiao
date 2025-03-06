import Link from "next/link"

export default function PostList() {
  return (
    <>
      <div className="grid gap-5 grid-cols-3">
        <div className="text-lg font-medium col-span-full">Blog posts</div>

        {Array.from({ length: 6 }).map((_, index) => {
          const id = index + 1
          return (
            <Link
              key={id}
              href={`/blog/${id}`}
              className="grid gap-2 text-gray-800/70 hover:text-gray-800"
            >
              <div className="aspect-video bg-current rounded-lg mb-1" />
              <div className="bg-current rounded-lg h-[0.4lh]" />
              <div className="bg-current rounded-lg h-[0.4lh]" />
              <div className="bg-current rounded-lg h-[0.4lh] w-2/3" />
            </Link>
          )
        })}
      </div>
    </>
  )
}
