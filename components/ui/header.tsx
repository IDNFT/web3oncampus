'use client'

import { useState, useEffect, Children } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-md shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
             <li>
                <Link href="/about" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              <li>
                <Link href="/news" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">News</Link>
              </li>
              <li>
                <Link href="/community" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Community</Link>
              </li>
              <li>
                <Dropdown
                title="Programs">
                  <a href="#" className="text-sm">
                    <ul>
                      <li className="mb-2 hover:text-red-700">
                        Web3 on Campus
                      </li>
                    </ul>
                  </a>
                  <a href="#" className="text-sm">
                    <ul>
                      <li className="mb-2 pt-2 hover:text-red-700 border-t border-gray-200">
                        IDNFT Academy
                      </li>
                    </ul>
                  </a>
                  <a href="#" className="text-sm">
                    <ul>
                      <li className="mb-2 pt-2 hover:text-red-700 border-t border-gray-200">
                        Beyond Canvas
                      </li>
                    </ul>
                  </a>
                  <a href="#" className="text-sm">
                    <ul>
                      <li className="pt-2 hover:text-red-700 border-t border-gray-200">
                        Temu NFT & Web3
                      </li>
                    </ul>
                  </a>
                </Dropdown>
              </li>
              <li>
                <Link href="/community" className="btn-sm font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 ml-3 rounded-full">
                  <span>Join Us</span>
                  <svg className="w-3 h-3 fill-current shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
