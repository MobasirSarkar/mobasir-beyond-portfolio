import React from 'react'
import MobileNav from './mobile-nav'

export default function Nav() {
   return (
      <div>
         <nav className='hidden lg:flex'>
         </nav>
         <MobileNav />
      </div>
   )
}

