/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-30 10:29:34
 * @Description: 
 */
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <div className="me-title flex justify-center sm:mt-4">
        EveryLittleCode🖥️
      </div>
      <div className="avatar flex justify-center">
        <div className="w-24 h-24 rounded-full bg-slate-400 mt-10 sm:w-32 sm:h-32 sm:mt-24">
          <Image
            className="rounded-full"
            src={'https://avatars.githubusercontent.com/u/19337709?v=4'}
            alt="avator"
            width={500}
            height={500}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
      <div className="introduce flex flex-col items-center justify-center mt-16">
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <div>🤟Hi there! I'm Jeff</div>
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <div className="mt-2">I'm Software Engineer</div>
        <Link href="/posts" className="mt-10 text-title underline cursor-pointer sm:text-xl">
          Posts
        </Link>
        <Link href="https://github.com/saitoChen/rollup-tslib-template" className="mt-2 text-title underline cursor-pointer sm:text-xl">rollup-tslib-template</Link>
        <Link href="https://github.com/saitoChen/vue-awesome-textarea" className="mt-2 text-title underline cursor-pointer sm:text-xl">vue-awesome-textarea</Link>
      </div>
    </>
  );
}
