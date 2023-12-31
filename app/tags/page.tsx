/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-31 12:47:34
 * @Description: 
 */
import query from '@/app/libs/db'
import { getTagsCount } from '@/app/libs/sql'
import { parseRes } from '../utils/formatRawData'
import Link from 'next/link'
type Tag = {
    tagName: string
    tagId: number
    articleNums: number
}

const getAllTags = async () => {
    const tagsInfo = await query(getTagsCount)
    return parseRes(tagsInfo)
}

const Tags = async () => {
    const tagsList = await getAllTags()
    return (
        <>
            <ul>
                { tagsList && tagsList.map((tag: Tag) => {
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