import React, { PropsWithChildren } from "react";
import { cn } from "./utils";

type Props = PropsWithChildren<{
   className?: string;
}>;

const MaxWidthWrapper = ({ children, className }: Props) => {
   return (
      <main className={cn(`m-auto max-w-7xl my-10 space-y-10 px-3`, className)}>
         {children}
      </main>
   );
};

export default MaxWidthWrapper;
