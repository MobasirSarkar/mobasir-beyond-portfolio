"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { TypewriterEffectSmooth } from '../ui/typewritter'
import { typeText } from '@/lib/typewrittertext'
import { ScrollDown } from '../ui/scrolldown'


export function Intro() {
   const containerRef = useRef<HTMLDivElement>(null)
   const elementRef = useRef<HTMLDivElement[]>([])

   const addToRefs = (el: HTMLDivElement) => {
      if (el && !elementRef.current.includes(el)) {
         elementRef.current.push(el)
      }
   }
   useEffect(() => {
      const animation = gsap.fromTo(
         elementRef.current,
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1, }
      )

      return () => {
         animation.revert()
      }
   }, [])
   return (
      <div className='z-10 relative container h-full flex flex-col'
      >
         <div ref={containerRef} className='flex uppercase lg:gap-4 w-full h-[45%] lg:mt-0 lg:p-1 mt-3 justify-center lg:flex-row flex-col'>
            <div className="flex justify-center gap-3 text-[11rem] lg:w-full h-[50%] lg:h-full">
               <div ref={addToRefs} className='lg:typo-name'>hi !</div>
               <div ref={addToRefs} className='lg:typo-name'>i'm </div>
            </div>
            <div ref={addToRefs} className='lg:typo-name gradient-text animate-gradient text-[8.9rem] lg:w-full md:flex md:justify-center lg:ml-0'>
               <span>Mobasir</span>
            </div>
         </div>
         <div className='flex uppercase gap-3 lg:gap-8 w-full h-[55%] lg:mt-2 lg:p-3 items-center flex-col'>
            <div className='w-full h-[40%] pl-3 lg:h-[50%] lg:pl-[7rem] lg:mb-4 lg:pb-10'>
               <TypewriterEffectSmooth words={typeText} />
            </div>
            <div className='w-full h-[60%] lg:h-[50%] flex items-center flex-col'>
               <div className=''><ScrollDown /></div>
            </div>
         </div>
      </div>
   )
}

