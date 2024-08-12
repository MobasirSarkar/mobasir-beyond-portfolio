import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '../../lib/cn'

export const Highlight = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {

   const ref = useRef<HTMLSpanElement>(null)

   const isInView = useInView(ref, { once: true })

   return (
      <motion.span
         ref={ref}
         initial={{
            backgroundSize: "0% 100%",
         }}
         animate={isInView ? {
            backgroundSize: "100% 100%",
         } : {}}
         transition={{
            duration: 2,
            ease: "linear",
            delay: 0.5,
         }}
         style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            display: "inline",
         }}
         className={cn(
            `relative inline-block pb-1 px-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
            className
         )}
      >
         {children}
      </motion.span>
   );
};
