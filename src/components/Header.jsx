"use client";
import React, { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import Link from "next/link";
function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="flex px-20 py-3 justify-between ">
      <div className="flex gap-5 items-center">
        <Link href={"/"} className="flex items-center gap-1">
          <AiFillHome /> Home
        </Link>
        <Link href={"/about"} className="flex items-center gap-1">
          <BsFillInfoCircleFill /> About
        </Link>
      </div>
      <div className="flex items-center gap-1">
        {/*  */}

        {mounted &&
          (currentTheme === "dark" ? (
            <MdLightMode
              className="mr-10 font-bold text-3xl cursor-pointer"
              onClick={() => {
                setTheme("light");
              }}
            />
          ) : (
            <MdDarkMode
              className="mr-10 font-bold text-3xl cursor-pointer"
              onClick={() => {
                setTheme("dark");
              }}
            />
          ))}

        <Link href={"/"} className=" flex items-center">
          <h1 className=" bg-amber-500 text-xl font-bold px-2 py-1 rounded-md w-fit">
            IMDB
          </h1>
          <span className="font-semibold"> Clone</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
