import React from 'react'
import { styles } from './styles'
import { Bona_Nova } from 'next/font/google'
import { Baskervville } from 'next/font/google'

const BaskervvilleFont = Baskervville({ weight: ["400"], style: ["italic"], subsets: ["latin"] })
export default function Intro() {
   return (
      <section className={styles.Intro}>
         <div className='w-full h-[50%]'>
            <h1 className={`${BaskervvilleFont.className} text-5xl lg:text-9xl lg:p-10 p-6 font-semibold`}>HI ! EVERYONE</h1><br />
            <span className='text-5xl'>I'M MOBASIR</span>
         </div>
         <div className='w-fulll h-[50%]'></div>
      </section>
   )
}

