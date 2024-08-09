"use client"
import Intro from '@/components/intro/Intro'
import { Header } from '@/components/pageComp/header/header'
import StickyMouse from '@/components/pageComp/header/stickymouse/stickymouse'
import { SmoothScroll } from '@/lib/scrollfooter'
import React, { useRef } from 'react'

export default function Home() {
   SmoothScroll()
   const ref = useRef(null)
   return (
      <main className="h-screen">
         <Header containerRef={ref} />
         <Intro />
         <StickyMouse stickyElement={ref} />
      </main>)
}
