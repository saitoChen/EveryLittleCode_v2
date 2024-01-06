import { formatDate } from "@/app/utils/formatDate"
import Link from "next/link"
import { headers } from "next/headers"
export type Post = {
    title: string
    createdAt: string
    article_id: string
  }

const ArticlesList = ({ posts }: {posts: Post[]}) => {
    const heads = headers()
    const path = heads.get('next-url')
    const title = path && path.split('/')[2] ? decodeURIComponent(path.split('/')[2]) : 'All'
    return (
        <ul className='posts mt-8 pb-16 '>
        {Array.isArray(posts) && posts.map((post: Post) => {
            return (
            <li className='mt-4' key={post.article_id}>
                <Link href={`/posts/${title}/${post.title}?id=${post.article_id}`} className='text-base underline  cursor-pointer hover:text-title sm:text-xl'>{ post.title }</Link>
                <div className='mt-2'>{ formatDate(post.createdAt) }</div>
            </li>
            )
        })}
        </ul>
    )
}

export default ArticlesList