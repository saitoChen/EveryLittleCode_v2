import { getArticlesByTagId } from '@/app/libs/sql'
import query from '@/app/libs/db'
import { parseRes } from '@/app/utils/formatRawData'
import ArticlesList, { type Post } from '@/app/components/ArticlesList'
import { headers } from "next/headers";
import BasicLayout from '@/app/components/BasicLayout';


const getArtciles = async (id: string):Promise<Post[]> => {
  const res = await query(getArticlesByTagId(id))
  return parseRes(res)
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
