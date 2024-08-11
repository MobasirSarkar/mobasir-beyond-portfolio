import React from 'react'
export default function Footer() {
   return (
      <div
         className='relative h-[800px] z-20 shadow-lg bg-black/10'
         style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
         <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
            <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
               <Content />
            </div>
         </div>
      </div>
   )
}


const Content = () => {
   return (
      <div className='text-5xl flex items-center justify-center h-full'>
         <div>footer</div>
      </div>
   )
}
