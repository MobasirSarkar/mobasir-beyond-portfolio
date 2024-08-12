"use client"
import React, { forwardRef, RefObject, useState } from 'react'
import MagneticArea from './magnetic/magnetic'
import { HamburgerButton } from '@/components/ui/hamburger'

interface HeaderProps {
   containerRef: RefObject<HTMLDivElement>
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header({ containerRef }) {
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
})



