/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-16 14:40:01
 * @Description:
 */
"use client";
import GithubSvg from "../../Icons/Github";
import { usePathname } from "next/navigation";

const Header = () => {
  const originPath = usePathname();
  const path = handleSlash(originPath);
  console.log(path);
  return (
    <div className="flex flex-col sm:flex-row justify-between p-6">
      <div>{`${path}`}</div>
      <div className="cursor-pointer">
        <GithubSvg />
      </div>
    </div>
  );
};

const handleSlash = (path: string) => {
  return path.replace(/\/+/g, " / ");
};

export default Header;
