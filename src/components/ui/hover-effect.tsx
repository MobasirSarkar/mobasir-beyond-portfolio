"use client"
import React, { useState } from "react"
import { cn } from "../../lib/utils"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export const HoverEffect = ({
   items,
   className,
}: {
   items: {
      path: string,
      label: string
   }[];
   className?: string;
}) => {
   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const activePath = usePathname()
   return (
      <div
         className={cn(
            `w-[80%] h-full flex items-center justify-center text-center`,
            className
         )}
      >
         {items.map((item, idx) => (
            <Link
               href={item?.path}
               key={item?.path}
               className={`relative group  block p-2 h-full w-full ${activePath === item.path ? "underline underline-offset-4" : ""} transition-all duration-150 ease-in-out`}
               onMouseEnter={() => setHoveredIndex(idx)}
               onMouseLeave={() => setHoveredIndex(null)}
            >
               <AnimatePresence mode="sync">
                  {hoveredIndex === idx && (
                     <motion.span
                        className="h-full w-full bg-teal-300/50 dark:bg-gray-700/40 inset-0 absolute block rounded-sm"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                           opacity: 1,
                           transition: { duration: 0.15 },
                        }}
                        exit={{
                           opacity: 0,
                           transition: { duration: 0.15, delay: 0.2 },
                        }}
                     />
                  )}
               </AnimatePresence>
               <text className="relative z-10">{item.label}</text>
            </Link>
         ))}
      </div>
   );
};
