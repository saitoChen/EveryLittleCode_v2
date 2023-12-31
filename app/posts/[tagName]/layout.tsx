import BasicLayout from "@/app/components/BasicLayout"
import { headers } from "next/headers";
const TagsPosts = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const heads = headers()
    const path = heads.get('next-url')
    const title = path ? path.split('/')[2] : 'TagsName'
    return (
        <BasicLayout title={title} content={children} />
    )
}


export default TagsPosts