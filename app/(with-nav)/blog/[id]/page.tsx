import { use } from "react"
import PostDetailClient from './PostDetailClient'

// 这是服务器组件，用于处理params参数
export default function Page({
  params
}: {
  params: { id: string } | Promise<{ id: string }>
}) {
  // 在服务器组件中安全地使用React.use()来解包params
  const resolvedParams = use(Promise.resolve(params))
  
  // 将解析后的id传递给客户端组件
  return <PostDetailClient id={resolvedParams.id} />
}
