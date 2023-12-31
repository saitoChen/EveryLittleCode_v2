/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-17 14:28:05
 * @Description:
 */
const Article = ({ params, searchParams }: { params: { slug: string }, searchParams:{id: string} }) => {
  console.log(params);

  return <div>blog{searchParams.id}: {params.slug}</div>;
};

export default Article;
