"use client";
import React, { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../../lib/cn";
export const TextGenerateEffect = ({
   words,
   className,
   filter = true,
   duration = 0.5,
}: {
   words: string;
   className?: string;
   filter?: boolean;
   duration?: number;
}) => {
   const [scope, animate] = useAnimate();
   const divRef = useRef<HTMLDivElement | null>(null)
   const isInView = useInView(divRef, { once: true })

   let wordsArray = words.split(" ");
   useEffect(() => {
      if (isInView) {
         animate(
            "span",
            {
               opacity: 1,
               filter: filter ? "blur(0px)" : "none",
            },
            {
               duration: duration ? duration : 1,
               delay: stagger(0.2),
            }
         );
      }
   }, [scope.current]);

   const renderWords = () => {
      return (
         <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
               return (
                  <motion.span
                     key={word + idx}
                     className="dark:text-white text-black opacity-0"
                     style={{
                        filter: filter ? "blur(10px)" : "none",
                     }}
                  >
                     {word}{" "}
                  </motion.span>
               );
            })}
         </motion.div>
      );
   };

   return (
      <div className={cn("font-bold", className)}>
         <div className="mt-4">
            <div ref={divRef} className=" dark:text-white text-black highlight-text leading-snug tracking-wide">
               {renderWords()}
            </div>
         </div>
      </div>
   );
};
