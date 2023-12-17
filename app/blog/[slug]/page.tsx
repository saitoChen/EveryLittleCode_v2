/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-17 14:28:05
 * @Description:
 */
const Article = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return <div>blog: {params.slug}</div>;
};

export default Article;
