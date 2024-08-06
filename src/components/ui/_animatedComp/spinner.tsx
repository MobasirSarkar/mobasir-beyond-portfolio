import React from 'react'

export const Spinner = () => {
   return (
      <div>
         <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className='w-24 h-24 animate-spin'>
            <circle className="" cx="400" cy="400" fill="none"
               r="199" stroke-width="33" stroke="#87fffc"
               stroke-dasharray="562 1400"
               stroke-linecap="round" />
         </svg>
      </div>
   )
}
