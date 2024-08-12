"use client"
import { Intro } from '@/components/intro/intro'
import Footer from '@/components/pageComp/footer'
import { Header } from '@/components/pageComp/header/header'
import { Progress } from '@/components/pageComp/Progress'
import React from 'react'

export default function Home() {
   return (
      <main className='z-10 w-screen h-screen overflow-x-hidden bg-indigo-700/45'>
         <Header />
         <Intro />
         <Progress />
         <Footer />
      </main>
   )
}

