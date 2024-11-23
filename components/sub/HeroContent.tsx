"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Firman Chandra Alamsyah Portfolio
          </h1>
        </motion.div>
        

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Break The Limit!!!{" "}
            </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-align: text-justify text-lg text-gray-400 my-5 max-w-[600px]"
          
        >
          Hi, I&apos;m Firman Chandra Alamsyah a Project Management & Full Stack Developer.
          As a dedicated professional in the banking industry and ICT company,
          I have been at the forefront of creating and developing innovations in technology products that have high functional value. 
          Building and maintaining the process of collecting, storing, and analyzing business data to help companies make better decisions to be used as business leaders for the company. 
          Have been the best in leading, managing and monitoring projects and ensuring company targets are achieved and good relationships are created with stakeholders.
          Passionate about continuous improvement, I thrive on solving complex challenges and pushing the boundaries of what can achieve in the financial and technology sector.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
