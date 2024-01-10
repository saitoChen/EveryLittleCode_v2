/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-31 12:47:34
 * @Description: 
 */

import Link from 'next/link'
import query from '@/app/libs/db'
import { getTagsCount } from '@/app/libs/sql'
import { parseRes } from '../utils/formatRawData'

type Tag = {
    tagName: string
    tagId: number
    articleNums: number
}



const getAllTags = async () => {
    // const res = await fetch(`${process.env.BASE}/api/tags`, { next: { revalidate: 60 * 60} })
    // const tagsInfo = await res.json()
    // return tagsInfo.data
    const result = await query(getTagsCount)
    const tagList = parseRes(result)[0]
    return tagList
}

const Tags = async () => {
    const tagsList = await getAllTags()
    return (
        <>
            <ul>
                { Array.isArray(tagsList) && tagsList.map((tag: Tag) => {
                    return (
                        <li className="mt-2 hover:text-title" key={tag.tagId}>
                            <Link href={`/posts/${tag.tagName}?id=${tag.tagId}`} className='flex'>
                                <div className='mr-4 underline cursor-pointer'>{ tag.tagName }</div>
                                <div>({ tag.articleNums })</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default Tags