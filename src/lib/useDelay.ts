import { useEffect, useState } from "react"


export const useDelayed = (delay: number) => {

   const [show, setShow] = useState<boolean>(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShow(true)
      }, delay)

      return () => clearTimeout(timer);
   }, [delay]);

   return show
}
