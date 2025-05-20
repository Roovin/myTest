import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerData } from '@/public/data/headerData'

export default function Header() {
  return (
    <header className=''>
      <div className="headerWrap bg-white py-[10px] ">
        <div className="container ">
          <div className="mainHeader flex items-center justify-between">
            <div className="logoWrap relative">
              <Link href={'/'} className='emptyLink'>.</Link>
              <Image src={'/header/logo.png'} alt='Logo' width={'150'} height={'80'} />
            </div>
            <div className="mainNav">
              <ul className='flex items-center '>
                {
                  headerData?.map((item, i) => {
                    return (
                      <li key={i} className='mr-[20px] last:mr-[0]'>
                        <Link className='inline-block text-black hover:text-[#0018ef] font-[500] text-[18px]' href={item?.nav}>{item?.nav}</Link>
                      </li>
                    )
                  }
                  )
                }
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
