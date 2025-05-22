import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
  return (
   <main className='pt-[90px] max-md:pt-[65px]'>
        <Header />
            {children}
        <Footer />
    </main>
  )
}
