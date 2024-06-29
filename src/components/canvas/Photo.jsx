"use client";

import { motion } from "framer-motion";
import photo from "../../assets/photo.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*IMAGE*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] 
          mix-blend-lighten absolute"
        >
          <img
            src={photo}
            alt="photo"
            priority
            quality={100}
            fill
            className="object-contain 
            max-h-[298px] max-w-[298px] 
            xl:max-h-[442px] xl:max-w-[498px] 
            xl:ml-20 ml-8"
          />
        </motion.div>

        {/*CIRCLE*/}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#6076f1"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 95 72", "4 250 22 22"],
              rotate: [120, 360 ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

