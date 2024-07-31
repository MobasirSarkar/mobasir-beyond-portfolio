import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface MenuIconProps {
   isOpen: boolean
   toggleMenu: () => void
}

export default function HamburgerIcon({ isOpen, toggleMenu }: MenuIconProps) {
   const { theme } = useTheme()
   return (
      <button className={`flex flex-col items-center justify-center w-10 h-10 space-y-1 rounded-sm border ${theme === "dark" ? "border-gray-500" : "border-black"}`}
         onClick={toggleMenu}
      >
         <motion.span
            className={`block w-4 h-0.5 ${theme === "dark" ? "bg-gray-100" : "bg-black"}`}
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 2 : 0 }}
         />
         <motion.span
            className={`block w-4 h-0.5 ${theme === "dark" ? "bg-gray-100" : "bg-black"}`}
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
         />
      </button>
   )
}

