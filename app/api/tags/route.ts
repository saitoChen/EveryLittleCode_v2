import query from '@/app/libs/db'
import { getTagsCount } from '../../libs/sql';
import { parseRes } from '../../utils/formatRawData';
import { NextResponse } from 'next/server'

export const GET = async () => {
    const tagCounts = await query(getTagsCount);
    const data = parseRes(tagCounts)[0]
    return NextResponse.json({ data, Headers: {
        "Content-type": "application/json"
    } })
}
