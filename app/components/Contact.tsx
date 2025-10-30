"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { DataPicker } from "./DataPicker";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-[20vh] sm:h-[25vh] md:h-[40vh] mb-[13rem]">
      <div className="absolute w-[25rem] h-[25rem] rounded-full bg-[#f00] right-[3rem] bottom-[-50rem] blur-[400px] -z-10" />
      <div className="absolute w-[20rem] h-[20rem] rounded-full bg-[#0be903] left-[3rem] bottom-[-50rem] blur-[300px] -z-10" />
      <div className="flex flex-col items-center z-10">
        <div className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem]">
          <h1>BRO JOIN WITH TOGETHER</h1>
        </div>
        <div className="bg-[#ffffff] w-[20rem] sm:w-[22rem] md:w-[25rem] h-[25rem] mt-7 rounded-[20px] flex flex-col items-center py-2">
          <div className="text-black text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] font-semibold">
            <h1>CONTACT</h1>
          </div>
          <div className="text-[#00000042] mt-6 flex flex-col items-center w-full">
            <Input
              type="email"
              placeholder="Type your email"
              className="w-[80%] "
            />
            <Input
              type="number"
              placeholder="Give mobile number"
              className="mt-3 w-[80%] mb-3 "
            />
            <DataPicker />
            <Textarea className="w-[80%] mt-3" placeholder="Text with us" />
            <Button className="bg-black w-[80%] mt-4 cursor-pointer">
              Share with us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
