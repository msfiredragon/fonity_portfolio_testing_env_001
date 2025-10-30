"use client"

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface DataCardProps {
  title: string;
  image: string;
}


const DataCardSM = ({ title, image }: DataCardProps) => {
//   const hoverEffect = useRef<HTMLAudioElement | null>(null);
//   const [soundAllowed, setSoundAllowed] = useState(false);

//   useEffect(() => {
//     const enableSound = () => setSoundAllowed(true);
//     document.addEventListener("click", enableSound);
//     return () => document.removeEventListener("click", enableSound);
//   }, []);

//   const handleHover = () => {
//     if (soundAllowed || hoverEffect.current) {
//       hoverEffect.current.currentTime = 0;
//       hoverEffect.current.play();
//     }
//   };
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white flex justify-center items-center w-[13rem] h-[13rem] rounded-[20px] cursor-pointer  transition-all"
    //   onClick={handleHover}
    >
      <div className="flex flex-col justify-between gap-2 items-center">
        <h2 className="text-black text-[0.8rem] text-[1.3rem] font-semibold">
          {title}
        </h2>
        <Image
          src={image}
          className="w-[80px]"
          width={80}
          height={80}
          alt="figma"
        />
        {/* <audio ref={hoverEffect} src={"/click.wav"} preload="auto" /> */}
      </div>
    </motion.div>
  );
};

export default DataCardSM;
