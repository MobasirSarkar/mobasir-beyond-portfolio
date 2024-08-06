"use client"
import ModeToggle from '@/components/providers/mode-toggle'
import { BackGround } from '@/components/ui/_animatedComp/background'
import React from 'react'

export default function Landing() {
   return (

      <section className='centerbox w-full h-full z-10 bg-verticalLine' id="landing" >
         <ModeToggle />
      </section>
   )
}

