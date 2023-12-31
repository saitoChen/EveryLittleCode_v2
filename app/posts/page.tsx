/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-30 10:29:34
 * @Description: 
 */
import query from '@/app/libs/db'
import { getAllPosts } from '../libs/sql';
import { parseRes } from '../utils/formatRawData';
import { formatDate } from '../utils/formatDate';
import Link from 'next/link'

type Post = {
  title: string
  createdAt: string
}

export const revalidate = 10 * 60 

const queryAllPosts = async () => {
  const allPosts = await query(getAllPosts);
  return parseRes(allPosts);
}

const Post = async () => {
  const posts = await queryAllPosts()
  return <>
    <div className='mx-10 sm:mx-20 sm:mt-28'>
      <h3 className="mt-2 text-2xl text-title">Posts</h3>
      <div className="mt-4">View all <Link href="/tags" className="underline text-title cursor-pointer">tags</Link></div>
    </div>
    <ul className='posts mx-10 mt-8 sm:mx-20'>
      { posts.map((post: Post, idx: number) => {
        return (
          <li className='mt-4' key={idx}>
            <div className='text-base underline  cursor-pointer hover:text-title sm:text-xl'>{ post.title }</div>
            <div className='mt-2'>{ formatDate(post.createdAt) }</div>
          </li>
        )
      }) }
    </ul>
  </>;
};



export default Post;
