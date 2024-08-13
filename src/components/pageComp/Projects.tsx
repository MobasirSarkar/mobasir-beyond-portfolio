"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HoverCard } from '../ui/hover-cards'
export default function Project() {

   const divRef = useRef<HTMLHeadingElement | null>(null)
   const generateCard = [1, 2, 3, 4]
   const isInView = useInView(divRef, { once: true })
   return (
      <section className='container h-full z-10 relative lg:mt-4 border border-black' id='project'>
         <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.2 }}
            className='w-full h-[10%] border border-black flex lg:gap-4 uppercase lg:mt-4 text-bold gap-1'
         >
            <span ref={divRef} className='hightlight-text w-[50%] h-full items-center justify-end flex'>My</span>
            <span ref={divRef} className='hightlight-text w-[50%] h-full items-center justify-start flex gradient-text'>
               Works
            </span>
         </motion.h1>
         <div className='w-full h-[95%]'>

         </div>
      </section>
   )
}

