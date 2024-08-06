"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";

export function BackGround() {
   const containerVariant: Variants = {
      hidden: { opacity: 1 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
         }
      }
   }

   const itemVariants: Variants = {
      hidden: { y: -100, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
   }
   const divNo = [1, 2, 3, 4]
   return (
      <AnimatePresence mode="wait">
         <div className="fixed inset-0 container mx-auto grid"
         >
            <div className="relative grid grid-cols-2 lg:grid-cols-4">
               {divNo.map((item) => (
                  <motion.div
                     key={item}
                     className="background grid-item"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: item * 0.2 }}
                  >
                  </motion.div>
               ))}
            </div>
         </div>
      </AnimatePresence>
   );
}


