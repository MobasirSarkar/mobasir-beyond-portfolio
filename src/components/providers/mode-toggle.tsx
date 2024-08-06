"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from "framer-motion"
export default function ModeToggle() {
   const { theme, setTheme } = useTheme()
   const [mounted, setMounted] = useState<boolean>(false)
   const [isOn, setIsOn] = useState<boolean>(theme === "dark")

   useEffect(() => {
      setMounted(true)
      setIsOn(theme === "dark")
   }, [theme])

   if (!mounted) {
      return null
   }
   const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      setIsOn(newTheme === "dark")
   }
   const spring = {
      type: "spring",
      stiffness: 700,
      damping: 30
   }
   return (

      <button
         className={`switch ${isOn ? "switch-on" : "bg-gray-100"}`}
         onClick={toggleTheme}
         aria-pressed={isOn}
      >
         <motion.div className='handle' layout transition={spring} />
      </button>
   )
}

