"use client"
import React from 'react'
import { TypewriterEffectSmooth } from '../ui/typewritter'
import { typeText } from '@/lib/typewrittertext'
import { ScrollDown } from '../ui/scrolldown'
import { motion } from 'framer-motion'

export function Intro() {
   const textVariant = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 1,
            ease: "easeOut",
         },
      },
   };

   return (
      <div className='z-10 relative container h-full flex flex-col'
      >
         <div className='flex uppercase lg:gap-4 w-full h-[45%] lg:mt-0 lg:p-1 mt-3 justify-center lg:flex-row flex-col'>
            <div className="flex justify-center gap-3 text-[11rem] lg:w-full h-[50%] lg:h-full">
               <motion.div
                  className='lg:typo-name'
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
               >hi !</motion.div>
               <motion.div className='lg:typo-name'
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
               >i&#39;m </motion.div>
            </div>
            <motion.div
               className='lg:typo-name gradient-text animate-gradient text-[8.9rem] lg:w-full md:flex md:justify-center lg:ml-0'
               initial="hidden"
               animate="visible"
               variants={textVariant}
            >
               <span>Mobasir</span>
            </motion.div>
         </div>
         <div className='flex uppercase gap-3 lg:gap-8 w-full h-[55%] lg:mt-2 lg:p-3 items-center flex-col'>
            <div className='w-full h-[40%] pl-3 lg:h-[50%] lg:pl-[7rem] lg:mb-4 lg:pb-10'>
               <TypewriterEffectSmooth words={typeText} />
            </div>
            <motion.div
               initial={{ opacity: 0, scaleY: 0 }}
               animate={{ opacity: 1, scaleY: 1 }}
               transition={{ duration: 0.3, delay: 3, staggerChildren: 0.3 }}
               className='w-full h-[60%] lg:h-[50%] flex items-center flex-col gap-4'>
               <div className=''>
                  <ScrollDown />
               </div>
               <motion.div
               >Scroll Down</motion.div>
            </motion.div>
         </div>
      </div>
   )
}

