'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';

interface CursorProps {
   stickyElement: React.RefObject<HTMLDivElement>
}

interface TemplateProps {
   rotate: string
   scaleX: number
   scaleY: number
}


export default function StickyMouse({ stickyElement }: CursorProps) {

   const [isHovered, setIsHovered] = useState<boolean>(false);
   const cursor = useRef(null);
   const cursorSize = isHovered ? 60 : 15;

   const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0)
   }

   const scale = {
      x: useMotionValue(1),
      y: useMotionValue(1)
   }

   //Smooth out the mouse values
   const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
   const smoothMouse = {
      x: useSpring(mouse.x, smoothOptions),
      y: useSpring(mouse.y, smoothOptions)
   }

   const rotate = (distance: { x: number; y: number; }) => {
      const angle = Math.atan2(distance.y, distance.x);
      animate(cursor.current, { rotate: `${angle}rad`, distance: 0, type: "spring" })
   }

   const manageMouseMove = (e: MouseEvent) => {
      if (!stickyElement.current) return
      const { clientX, clientY } = e;
      const { left, top, height, width } = stickyElement.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 }
      if (isHovered) {
         const distance = { x: clientX - center.x, y: clientY - center.y }
         rotate(distance)

         const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
         const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3])
         const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8])
         scale.x.set(newScaleX);
         scale.y.set(newScaleY);

         mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1));
         mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1));
      }
      else {
         mouse.x.set(clientX - cursorSize / 2);
         mouse.y.set(clientY - cursorSize / 2);
      }
   }

   const manageMouseOver = () => {
      setIsHovered(true)
   }

   const manageMouseLeave = () => {
      setIsHovered(false)
      animate(cursor.current, { scaleX: 1, scaleY: 1, duration: 0.1, type: "spring" })
   }

   useEffect(() => {
      if (!stickyElement.current) return

      const currentStickyEL = stickyElement.current
      currentStickyEL.addEventListener("mouseenter", manageMouseOver)
      currentStickyEL.addEventListener("mouseleave", manageMouseLeave)
      window.addEventListener("mousemove", manageMouseMove);

      return () => {
         if (!stickyElement.current) return
         stickyElement.current.removeEventListener("mouseenter", manageMouseOver)
         stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
         window.removeEventListener("mousemove", manageMouseMove)
      }
   }, [isHovered, stickyElement])

   const template = ({ rotate, scaleX, scaleY }: TemplateProps) => {
      return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
   }

   return (
      <div className="">
         <motion.div
            transformTemplate={template}
            style={{
               left: smoothMouse.x,
               top: smoothMouse.y,
               scaleX: scale.x,
               scaleY: scale.y,
            }}
            animate={{
               width: cursorSize,
               height: cursorSize
            }}
            className={`cursor dark:bg-white hidden lg:block`}
            ref={cursor}>
         </motion.div>
      </div>
   )
}