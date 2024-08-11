"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const ScrollDown: React.FC = () => {
   const ballRef = useRef<SVGCircleElement>(null);

   useEffect(() => {
      if (ballRef.current) {
         gsap.to(ballRef.current, {
            y: -12,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 1,
            loop: true
         });
      }
   }, []);

   return (
      <svg
         width="44px"
         height="70px"
         viewBox="0 0 44 70"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="mouse-icon"
      >
         <rect
            x="1.5"
            y="1.5"
            width="41"
            height="67"
            rx="20.5"
            stroke="black"
            strokeWidth="3"
         />
         <circle
            ref={ballRef}
            cx="22"
            cy="48"
            r="5"
            fill="black"
         />
      </svg>
   );
};

