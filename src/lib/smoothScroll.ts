"use client"
import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const SmoothScroll = () => {
   useEffect(() => {
      const lenis = new Lenis()
      lenis.on("scrool", ScrollTrigger.update)

      gsap.ticker.add((time) => {
         lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)
   }, [])

}
