"use client"
import React from "react";
import { motion } from "framer-motion";

export const ScrollDown: React.FC = () => {
   return (
      <svg
         width="44px"
         height="70px"
         viewBox="0 0 44 70"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="mouse-icon"
      >
         <rect
            x="1.5"
            y="1.5"
            width="41"
            height="67"
            rx="20.5"
            stroke="black"
            strokeWidth="3"
         />
         <motion.circle
            cx="22"
            cy="48"
            r="5"
            fill="black"
            animate={{
               y: [-12, 8], // Move up and down
            }}
            transition={{
               repeat: Infinity,
               repeatType: "reverse",
               ease: "easeInOut",
               duration: 1,
            }}
         />
      </svg>
   );
};

