/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-31 12:48:58
 * @Description: 
 */
import BasicLayout from '@/app/components/BasicLayout'

const TagsLayout  = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
        <>
            <BasicLayout title={ 'Tags' } content={children} />
            
        </>
    )
}

export default TagsLayout