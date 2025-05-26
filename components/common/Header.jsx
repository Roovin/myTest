import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerData } from '@/public/data/headerData'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[99]`} >
      <div className="headerWrap bg-white py-[10px] ">
        <div className="container ">
          <div className="mainHeader flex items-center justify-between">
            <div className="logoWrap relative max-md:max-w-[100px]">
              <Link href={'/'} className='emptyLink'>.</Link>
              <Image src={'/header/logo.png'} alt='Logo' width={'150'} height={'80'} />
            </div>
            <div className="mainNav ">
              <ul className={`flex items-center max-sm:absolute max-sm:top-[55px] max-sm:bg-white max-sm:left-0 max-sm:w-full max-sm:z-[99] max-sm:block max-sm:pb-[20px] max-sm:px-[20px]  transition-all duration-700 ease-in-out ${isMenuOpen ? 'left-0' : 'max-sm:left-[-100%]'}`}>
                {
                  headerData?.map((item, i) => {
                    return (
                      <li key={i} className='mr-[20px] last:mr-[0] max-md:mr-[14px] max-md:mb-[10px] max-md:last:mb-0'>
                        <Link className='inline-block text-black hover:text-[#0018ef] font-[500] text-[18px] max-md:text-[14px]' href={item?.url}>{item?.nav}</Link>
                      </li>
                    )
                  }
                  )
                }
              
              </ul>
              <div className="humburger max-sm:block hidden">
               <button aria-label="first link" className={`menu-toggle w-9 relative transition-transform duration-500 cursor-pointer max-sm:w-[20px] max-sm:h-[12px] laptop-portrait:hidden xl-up:hidden `} onClick={toggleMenu}>
                <ul>
                  <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-black ${isMenuOpen ? 'menu-open transform rotate-[135deg] top-3 sm:top-[6px]' : 'top-0'}`}></li>
                  <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-black ${isMenuOpen ? 'menu-open opacity-0 left-[-60px] ' : 'top-[8px] left-0 sm:top-[6px]'}`}></li>
                  <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-black ${isMenuOpen ? 'menu-open transform rotate-[-135deg] top-3 sm:top-[6px]' : 'top-[15px] sm:top-[12px]'}`}></li>
                </ul>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
