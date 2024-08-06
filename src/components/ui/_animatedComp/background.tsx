"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";

export function BackGround() {
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


