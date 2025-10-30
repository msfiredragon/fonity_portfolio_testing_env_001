"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <div className="mt-[2rem] h-0 sm:h-[5vh] md:h-[16vh] ">
      <div className="absolute w-[10rem] sm:w-[25rem] h-[25rem] sm:h-[25rem] rounded-full bg-[#f00] left-[3rem] top-[4rem] blur-[400px] z-10" />
      <div className="absolute w-[8rem] sm:w-[20rem] h-[15rem] sm:h-[20rem] rounded-full bg-[#0be903] right-[3rem] top-[4rem] blur-[200px] sm:blur-[300px] z-10" />

      <div className="flex flex-col justify-center items-center">
        <div className="leading-[2.6rem] md:leading-[3.3rem] flex justify-center items-center flex-col  ">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: 100 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[1.2rem] md:text-[1.8rem]"
          >
            NEW ERA BEGINS
          </motion.p>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: -100 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[2.2rem] md:text-[2.8rem]"
          >
            NOW TIME TO MAKE
          </motion.h1>
        </div>
        <div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: 100 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="hover:bg-[#ffffff] bg-[#ffffffd7] transition-all text-black cursor-pointer mt-[1.4rem] font-bold w-[10rem] h-[1.6rem] md:h-[1.8rem] text-[0.7rem] md:text-[0.8rem]">
              JOIN WITH US
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[3rem]">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -150 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white w-[70%] py-3  rounded-[1rem]"
        >
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[0.9rem] sm:text-[1.3rem] md:text-[1.5rem] text-black font-bold">
              LETS BEGIN! WAIT WHAT NEXT?
            </h1>
            <p className="text-[0.6rem] sm:text-[0.8rem] md:text-[1.2rem] text-black font-extrabold">
              ONLY FEW STEPS :)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
