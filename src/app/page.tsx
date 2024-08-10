"use client"
import { Intro } from '@/components/intro/intro'
import Footer from '@/components/pageComp/footer'
import { Header } from '@/components/pageComp/header/header'
import StickyMouse from '@/components/pageComp/header/stickymouse/stickymouse'
import { Progress } from '@/components/pageComp/Progress'
import React, { useRef } from 'react'

export default function Home() {
   const ref = useRef(null)
   return (
      <main className="h-screen w-screen overflow-x-hidden">
         <Header containerRef={ref} />
         <Intro />
         <Progress />
         <StickyMouse stickyElement={ref} />
         <Footer />
      </main>)
}
