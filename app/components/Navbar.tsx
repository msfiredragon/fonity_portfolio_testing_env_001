"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <motion.div className="w-full py-[2rem] z-10">
      <nav
        className={`${activeMenu ? "sm:hidden flex top-[0] " : "-top-[100%]"} 
        flex flex-col absolute bg-white text-black  transition-all left-0 w-full pb-5`}
      >
        <div className="flex justify-between w-full px-[9%] pt-[2rem] pb-3 ">
          <div className="flex flex-row">
            <div
              onClick={() => setActiveMenu(false)}
              className="border-[2px] border-[#0000007b] left-[2rem] mr-4 w-[28px] h-[28px] p-[1.2px] justify-center items-center rounded-[10px] sm:hidden flex"
            >
              <Image
                src={"/alt_menu.png"}
                className="cursor-pointer"
                width={15}
                height={15}
                alt="menu"
              />
            </div>
            <div>
              <a href="#" className="logo text-[1.2rem] md:text-[1.5rem] mr-5">
                FONITY
              </a>
            </div>
          </div>
          <div className="flex justify-center list-none mt-1">
            <li className="cursor-pointer mr-4 text-[0.8rem] font-semibold text-[#000000b5] hover:text-[#fff] transition-all">
              BLOG
            </li>
            <div>
              <Image
                src={"/github.png"}
                className="cursor-pointer"
                width={20}
                height={20}
                alt="github"
              />
            </div>
            <div className={`${!activeMenu && "hidden"} -mt-[0.2rem]`}>
              <div className="bg-white p-[0.4rem] rounded-[15px] ml-4 cursor-pointer border-[2px] border-[#0000007b]">
                <Image
                  src={"/twitter.png"}
                  width={10}
                  height={10}
                  alt="twitter"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-[9%] flex flex-col justify-center items-center">
          {navLinks.map((index) => (
            <ul
              key={index.id}
              className="flex justify-center items-center text-[1rem] font-semibold"
            >
              <a
                href={index.route}
                className="cursor-pointer text-[#1f1e1ec2] hover:text-[#000] mt-3 transition-all"
              >
                {index.title}
              </a>
            </ul>
          ))}
        </div>
      </nav>

      <motion.nav
        className="flex justify-between items-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-start items-center flex-1 flex-row ">
          <div
            onClick={() => setActiveMenu(true)}
            className="bg-white left-[2rem] mr-4 w-[28px] h-[28px] p-[1.2px] justify-center items-center rounded-[10px] sm:hidden flex"
          >
            <Image
              src={"/alt_menu.png"}
              className="cursor-pointer"
              width={15}
              height={15}
              alt="menu"
            />
          </div>
          <a href="#" className="logo text-[1.2rem] md:text-[1.5rem] mr-5">
            FONITY
          </a>
          {navLinks.map((index) => (
            <ul
              key={index.id}
              className="justify-center gap-4 md:gap-6 items-center text-[0.6rem] md:text-[0.7rem] font-bold sm:flex hidden"
            >
              <a
                href={index.route}
                className="cursor-pointer mr-4 text-[#ffffffb5] hover:text-[#fff] transition-all"
              >
                {index.title}
              </a>
            </ul>
          ))}
        </div>
        <div className="flex justify-end items-center list-none flex-1 flex-row">
          <li className="cursor-pointer mr-4 text-[0.8rem] font-semibold text-[#ffffffb5] hover:text-[#fff] transition-all">
            BLOG
          </li>
          <div className="md:hidden flex">
            <Image
              src={"/github.png"}
              className="cursor-pointer"
              width={20}
              height={20}
              alt="github"
            />
          </div>
          <div className="hidden md:flex">
            <Image
              src={"/github.png"}
              className="cursor-pointer"
              width={25}
              height={25}
              alt="github"
            />
          </div>
          <div className="bg-white p-2 rounded-[15px] ml-4 cursor-pointer">
            <div className="md:hidden flex">
              <Image src={"/twitter.png"} width={5} height={5} alt="twitter" />
            </div>
            <div className="hidden md:flex">
              <Image
                src={"/twitter.png"}
                width={12}
                height={12}
                alt="twitter"
              />
            </div>
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
