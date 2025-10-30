"use client";

import React from "react";
import { motion } from "framer-motion";
import DataCard from "./DataCard";
import DataCardSM from "./DataCardSM";

const IntroSection = () => {
  return (
    <div className="w-full flex justify-center items-center h-[190vh] sm:h-[65vh] md:h-[60vh] mt-[-37rem] sm:mt-0">
      <div className="w-full flex justify-between items-center flex-col">
        <div>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: 100 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] text-[#ff750c] font-semibold"
          >
            REALITY HITS HARD
          </motion.h1>
        </div>
        <div className="w-[80%] flex justify-center items-center">
          <div className="mt-[3rem] gap-6 md:gap-10 h-2 justify-between hidden sm:grid grid-cols-1 sm:grid-cols-3 ">
            <DataCard title={"Develop"} image="/photoshop.png" />
            <DataCard title={"Design"} image="/figma.png" />
            <DataCard title={"Execute"} image="/terminal.png" />
          </div>
        </div>
        <div>
          <div className="w-[60%] mt-[3rem] gap-4 h-2 justify-between sm:hidden grid grid-cols-1 sm:grid-cols-3">
            <DataCardSM title={"Develop"} image="/photoshop.png" />
            <DataCardSM title={"Design"} image="/figma.png" />
            <DataCardSM title={"Execute"} image="/terminal.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
