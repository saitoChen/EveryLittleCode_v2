/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-01-01 13:59:52
 * @Description: 
 */
import query from '@/app/libs/db'
import { getPostById } from '@/app/libs/sql'
import { parseRes } from '@/app/utils/formatRawData'
import { type Post } from '@/app/components/ArticlesList'
import { formatDate } from '@/app/utils/formatDate'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import 'highlight.js/styles/stackoverflow-light.css'


type PostDetail = Post & {
    content: string
    author: string
}

const getPost = async (id: string):Promise<PostDetail> => {
    const res = await fetch(`http://localhost:3000/api/posts?postId=${id}`, { next: { revalidate: 60 * 60} })
    const post = await res.json()
    return post.data[0]
}

const Post = async ({ params, searchParams }: {params: { slug: string }, searchParams: { id: string }}) => {
    const id = searchParams.id
    const post = await getPost(id)
    const { content, frontmatter } = await compileMDX<{ title: string }>({
        source: post.content,
        options: { 
            parseFrontmatter: true, 
            mdxOptions: { 
                rehypePlugins: [
                    rehypeHighlight as any,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }]
                ]
            }
        },
      })
    return (
        <div className='mx-6 relative'>
            <div className="post-header  mt-24 sm:mt-8">
                <div className='title text-2xl  underline text-title sm:w-full sm:text-3xl'>{ post.title }</div>
                <div className='date mt-10 text-sm sm:mt-8'>{ formatDate(post.createdAt) }</div>
                <div className='author text-sm'>created by { post.author }</div>
            </div>
            <article className='mt-8 sm:absolute sm:top-40'>
                { content }
            </article>
        </div>
    )
}

export default Post