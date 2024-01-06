/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-31 12:47:34
 * @Description: 
 */

import Link from 'next/link'
type Tag = {
    tagName: string
    tagId: number
    articleNums: number
}

const getAllTags = async () => {
    const res = await fetch('http://localhost:3000/api/tags')
    const tagsInfo = await res.json()
    return tagsInfo.data
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