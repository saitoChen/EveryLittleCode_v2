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
    const res = await query(getPostById(id))
    return parseRes(res)[0]
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
        <div className='mx-6 mt-24 sm:mt-20'>
            <div className='title text-xl text-title underline sm:w-1/2'>{ post.title }</div>
            <div className='date mt-10 sm:mt-4'>{ formatDate(post.createdAt) }</div>
            <div className='author'>created by { post.author }</div>
            <article>
                { content }
            </article>
        </div>
    )
}

export default Post