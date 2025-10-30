import React from 'react'


interface ExtraDataProps {
  title: string;
  subTitle: string;
}

const DataBox = ({ title, subTitle }: ExtraDataProps) => {
  return (
    <div className="flex justify-center gap-[1.3rem] sm:gap-[1.6rem] items-center">
      <div
        className="w-[2rem] sm:w-[3rem] md:w-[4rem] h-[2rem] sm:h-[3rem] md:h-[4rem] bg-white rounded-[10px] sm:rounded-[20px] 
      text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] text-[#000000cc] flex justify-center items-center font-semibold"
      >
        {subTitle}
      </div>
      <div className="text-[0.8rem] sm:text-[1rem] md:text-[1.4rem]">
        {title}
      </div>
    </div>
  );
};

export default DataBox