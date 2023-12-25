/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-16 11:11:23
 * @Description:
 */
export default function Home() {
  return (
    <>
      <div className="me-title flex justify-center sm:mt-4">
        EveryLittleCode🖥️
      </div>
      <div className="avatar flex justify-center">
        <div className="w-24 h-24 rounded-full bg-slate-400 mt-10 sm:w-32 sm:h-32 sm:mt-24"></div>
      </div>
      <div className="introduce flex flex-col items-center justify-center mt-16">
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <div>🤟Hi there! I'm Jeff</div>
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <div className="mt-2">I'm Software Engineer</div>
        <div className="mt-10 text-title underline cursor-pointer sm:text-xl">
          Posts
        </div>
      </div>
    </>
  );
}
