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
   return (
      <AnimatePresence mode="wait">
         <motion.div className="fixed inset-0 container mx-auto grid"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
         >
            <div className="relative grid grid-cols-2 lg:grid-cols-4">
               <motion.div className="background" variants={itemVariants}></motion.div>
               <motion.div className="background" variants={itemVariants}></motion.div>
               <motion.div className="background" variants={itemVariants}></motion.div>
               <motion.div className="background" variants={itemVariants}></motion.div>
            </div>
         </motion.div>
      </AnimatePresence>
   );
}


