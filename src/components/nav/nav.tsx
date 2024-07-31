"use client"
import React, { useEffect, useState } from 'react'
import MobileNav from './mobile-nav'
import ModeToggle from '../providers/mode-toggle'
import { navLinks } from '@/lib/nav-links'

export default function Nav() {
   const [isSticky, setSticky] = useState<boolean>(false)

   const handleScroll = () => {
      if (window.scrollY > 20) {
         setSticky(true)
      } else {
         setSticky(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])
   return (
      <>
         <div className={`transition-all duration-300 ease-in-out ${isSticky ? "fixed top-0 left-0 right-0 z-50 shadow backdrop-blur-sm " : "relative"}`}>
            <nav
               className={`hidden m-auto max-w-5xl px-3 lg:flex
            flex-row h-[4rem] justify-between items-center `}>
               <div className='flex gap-6'>
                  <span>Logo</span>
                  <ul className='flex gap-4'>
                     {navLinks.map((navLink) => (
                        <li key={navLink.path} className=''>{navLink.label}</li>
                     ))
                     }
                  </ul>
               </div>
               <div className=''>
                  <ModeToggle />
               </div>
            </nav>
         </div>
         <MobileNav />
      </>
   )
}

