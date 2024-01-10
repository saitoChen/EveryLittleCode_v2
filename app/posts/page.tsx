/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-30 10:29:34
 * @Description: 
 */
import Link from 'next/link'
import ArticlesList from '../components/ArticlesList';
import query from '@/app/libs/db'
import { getAllPosts } from '../libs/sql';
import { parseRes } from '../utils/formatRawData';
import { formatDate } from '../utils/formatDate';
type Post = {
  title: string
  createdAt: string
  article_id: string
}

export const revalidate = 10 * 60 

const queryAllPosts = async () => {
  // const allPosts = await fetch(`${process.env.BASE}/api/posts`, { next: { revalidate: 60 * 60} });
  // const result = await allPosts.json()
  // return result.data
  const result = await query(getAllPosts);
  const posts = parseRes(result)[0]
  return posts
}

const Post = async () => {
  const posts = await queryAllPosts()
  return <div className='mx-10 sm:mx-20'>
    <div className='sm:mt-24'>
      <h3 className="mt-2 text-2xl text-title sm:text-3xl">Posts</h3>
      <div className="mt-4">View all <Link href="/tags" className="underline text-title cursor-pointer">tags</Link></div>
    </div>
    <ArticlesList posts={posts} />
  </div>;
};



export default Post;
