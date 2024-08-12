"use client"
import { Intro } from '@/components/intro/intro'
import Footer from '@/components/pageComp/footer'
import { Header } from '@/components/pageComp/header/header'
import { Progress } from '@/components/pageComp/Progress'
import React, { useEffect, useRef, useState } from 'react'
import { BarLoader } from '@/components/ui/loader'

export default function Home() {
   const [isLoaded, setIsLoaded] = useState<boolean>(false)
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoaded(true)
      }, 2000)

      return () => {
         clearTimeout(timer)
      }
   }, [])
   const ref = useRef<HTMLDivElement | null>(null)
   return (
      <main className='z-10 w-screen h-screen overflow-x-hidden bg-indigo-700/45'>
         {
            !isLoaded ?
               <BarLoader /> :
               <>
                  <Header containerRef={ref} />
                  <Intro />
                  <Progress />
                  <Footer />
               </>
         }
      </main>
   )
}

