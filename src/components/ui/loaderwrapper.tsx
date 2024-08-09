"use client";

import React, { useState, useEffect } from "react";
import Loader from "./loader";

export default function LoaderWrapper({
   children,
}: {
   children: React.ReactNode;
}) {
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      const loadingTimeout = setTimeout(() => {
         setIsLoaded(true);
      }, 1500);

      return () => clearTimeout(loadingTimeout);
   }, []);

   return (
      <>
         {!isLoaded && <Loader />}
         {isLoaded && children}
      </>
   );
}
