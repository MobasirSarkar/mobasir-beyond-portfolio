"use client"
import React from 'react'
import MagneticArea from './magnetic/magnetic'
import { HamburgerButton } from '@/components/ui/hamburger'


export const Header = () => {
   return (
      <header className="h-[10%] flex w-full z-20 relative">
         <nav className='w-[50%] h-full justify-start flex items-center p-10 text-2xl'>
         </nav>
         <nav className='w-[50%] h-full flex items-center justify-center'>
            <div className='fixed flex w-[50%] justify-end lg:p-10 box-border cursor-pointer mix-blend-difference z-20 mr-14'>
               <MagneticArea>
                  <HamburgerButton />
               </MagneticArea>
            </div>
         </nav>
      </header>
   )
}



