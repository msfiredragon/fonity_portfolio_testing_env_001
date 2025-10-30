"use client"

import React from 'react'
import { motion } from 'framer-motion';
import DataBox from './DataBox';

const ExtraData = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] sm:h-[50vh] md:h-[40vh]">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: 100 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] text-[#ffffffe6] font-semibold"
      >
        WHAT WE DID -_-
      </motion.h1>
      <div className='py-[3rem] sm:py-[4rem]'>
        <div className="flex flex-row justify-center items-center gap-[3rem] sm:gap-[4rem] md:gap-[5rem]">
          <DataBox subTitle='18+' title='Experience' />
          <DataBox subTitle='10+' title='Clients' />
          <DataBox subTitle='13+' title='Projects' />
        </div>
      </div>
    </div>
  );
}

export default ExtraData