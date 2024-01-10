/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-30 10:29:34
 * @Description: 
 */
import { getArticlesByTagId } from '@/app/libs/sql'
import query from '@/app/libs/db'
import { parseRes } from '@/app/utils/formatRawData'
import ArticlesList, { type Post } from '@/app/components/ArticlesList'
import { headers } from "next/headers";
import BasicLayout from '@/app/components/BasicLayout';


const getArtciles = async (id: string):Promise<Post[]> => {
  // const res = await fetch(`${process.env.BASE}/api/posts?tagId=${id}`, { next: { revalidate: 60 * 60} })
  // const tags = await res.json()
  // return tags.data
  const res = await query(getArticlesByTagId(id))
  const post = parseRes(res)[0]
  return post
}

const Articles = async ({ id }: { id: string } ) => {

  const posts = await getArtciles(id)

  return <>
    <ArticlesList posts={posts} />
  </>
};

const ArticlesByTags = async({ params, searchParams }: { params: { tagName: string }, searchParams:{id: string} }) => {
  const heads = headers()
  const path = heads.get('next-url')
  console.log('params ->', params)
  const title = params.tagName ? decodeURIComponent(params.tagName) : 'All'
  return (
      <BasicLayout title={title}>
        <Articles  id={searchParams.id} />
      </BasicLayout>
  )
}

export default ArticlesByTags;
