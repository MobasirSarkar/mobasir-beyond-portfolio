"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

export default function ModeToggle() {
   const { theme, setTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) {
      return null
   }
   const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
   }
   return (
      <AnimatePresence mode="wait" initial={false}>
         <motion.div
            style={{ display: 'inline-block' }}
            key={theme}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
         >
            <Button size={"icon"} onClick={toggleTheme} className={`${theme === "dark" ? "bg-orange-300 text-black" : "bg-violet-500"} border`}>
               {theme === "dark" ?
                  <span className='h-6 w-6 flex justify-center items-center'>
                     <Sun />
                  </span> :
                  <span className=''>
                     <Moon fill='white' />
                  </span>}
            </Button>
         </motion.div>
      </AnimatePresence>
   )
}

