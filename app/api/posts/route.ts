/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-01-06 12:03:24
 * @Description: 
 */
import query from '@/app/libs/db'
import { getAllPosts, getArticlesByTagId,getPostById } from '../../libs/sql';
import { parseRes } from '../../utils/formatRawData';
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
    let data = null, result = null
    const searchParams = req.nextUrl.searchParams
    const tagId = searchParams.get('tagId')
    const postId = searchParams.get('postId')
    if (tagId) {
        // select posts by tagId
        return await handleResByTagId(tagId)
    }
    if (postId) {
        // select post's content by postId
        return await handleResByPostId(postId)
    }
    const allPosts = await query(getAllPosts);
    data = parseRes(allPosts)[0]
    return NextResponse.json({ data, Headers: {
        "Content-type": "application/json"
    } })
}

const handleResByTagId = async (tagId: string) => {
    const tags = await query(getArticlesByTagId(tagId))
    const data = parseRes(tags)[0]

    return NextResponse.json({ data })
}

const handleResByPostId = async (postId: string) => {
    const posts = await query(getPostById(postId))
    const data = parseRes(posts)[0]

    return NextResponse.json({ data })
}