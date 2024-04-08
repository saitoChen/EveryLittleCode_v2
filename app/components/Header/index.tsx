/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-16 14:40:01
 * @Description:
 */
"use client";
import GithubSvg from "../../Icons/Github";
import { usePathname } from "next/navigation";
import Link from 'next/link'
// import MoonIcon from "../MoonIcon";

const Header = () => {
  const originPath = usePathname();
  const path = decodeURIComponent(handleSlash(originPath));
  const navToGitHub = () => {
    window.open('https://github.com/saitoChen', "__blank")
  }
  const breadcrumbs = () => {
    return (
      <>
        <Link className="text-title" href="/">/</Link>{ path.slice(2) }
      </>
    )
  }
  return (
    <div className="flex flex-col items-center sm:flex-row justify-between p-6">
      <div className="order-2 mt-4 sm:order-1 sm:mt-0">{breadcrumbs()}</div>
      <div className="flex order-1 sm:order-2">
        <div className="cursor-pointer mr-4">
          {/* <MoonIcon /> */}
        </div>
        <div className="cursor-pointer" onClick={navToGitHub}>
          <GithubSvg />
        </div>
      </div>
    </div>
  );
};

const handleSlash = (path: string) => {
  return path.replace(/\/+/g, " / ");
};

export default Header;
