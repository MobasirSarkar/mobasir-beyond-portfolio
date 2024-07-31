"use client"
import { navLinks } from '@/lib/nav-links'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import ModeToggle from '../providers/mode-toggle'
import HamburgerIcon from './hamburger-icon'
import { usePathname } from 'next/navigation'


export default function MobileNav() {
   const activeLink = usePathname()
   const [isOpen, setIsOpen] = useState(false)

   const toggleOpen = () => {
      setIsOpen(prev => !prev)
   }

   return (
      <nav
         className={`lg:hidden border h-[4rem] w-[100%] md:flex flex justify-end `}
      >
         <span className='w-[14%] h-full flex items-center justify-center'>
            <ModeToggle />
         </span>
         <div
            className='w-[14%] h-full flex items-center justify-center flex-col'>
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleOpen} />
            <AnimatePresence>
               {isOpen && (
                  <motion.div
                     className='w-[13rem] h-[14rem] absolute top-[3.8rem] left-[12rem] opacity-60 shadow-lg'
                     initial={{ opacity: 0, y: 0 }}
                     animate={{ opacity: 1, y: 1 }}
                     exit={{ opacity: 0, y: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     <ul
                        className={`w-full h-full flex flex-col p-[3] bg-white/70 text-black dark:bg-gray-700 rounded-sm justify-center border`}

                     >
                        <AnimatePresence>
                           {
                              navLinks.map((navlink) => (
                                 <motion.li
                                    key={navlink.path}
                                    className={`w-full h-[98%] font-semibold flex items-center mt-1 mb-1 dark:text-gray-300 text-black`}
                                 >
                                    <Link
                                       href={navlink.path}
                                       className={`w-full h-full flex items-center pl-2 ${activeLink === navlink.path ? "dark:bg-gray-600 bg-gray-200 transition-all duration-300 ease-in-out" : ""}`}
                                    >
                                       {navlink.label}
                                    </Link>
                                 </motion.li>
                              ))
                           }
                        </AnimatePresence>
                     </ul>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </nav>
   )
}

