import Link from "next/link"

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <>
      <div className="grid gap-5 grid-cols-1">
        <Link
          href="/blog"
          className="text-lg font-medium col-span-full hover:text-white"
        >
          All posts
        </Link>

        <div className="grid gap-2 text-gray-800/70">
          <div className="aspect-video bg-current rounded-lg mb-1" />
          <div className="bg-current rounded-lg h-[0.5lh]" />
          <div className="bg-current rounded-lg h-[0.5lh]" />
          <div className="bg-current rounded-lg h-[0.5lh] w-2/3" />
        </div>
      </div>
    </>
  )
}
