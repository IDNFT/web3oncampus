'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-red-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link href="/about" className="flex font-medium w-full text-gray-600 hover:text-red-700 py-2" onClick={() => setMobileNavOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/news" className="flex font-medium w-full text-gray-600 hover:text-red-700 py-2" onClick={() => setMobileNavOpen(false)}>News</Link>
            </li>
            <li>
              <Link href="/community" className="flex font-medium w-full text-gray-600 hover:text-red-700 py-2" onClick={() => setMobileNavOpen(false)}>Community</Link>
            </li>
            <li className="border-y border-gray-300  my-2 py-2">
              <a className="font-medium w-full text-gray-600" onClick={() => setMobileNavOpen(false)}>Programs</a>
              <Link href="#" className="flex font-sm w-full text-sm text-gray-600 hover:text-red-700 py-2 pl-4 pt-4" onClick={() => setMobileNavOpen(false)}>Web3 on Campus</Link>
              <Link href="#" className="flex font-sm w-full text-sm text-gray-600 hover:text-red-700 py-2 pl-4" onClick={() => setMobileNavOpen(false)}>IDNFT Academy</Link>
              <Link href="#" className="flex font-sm w-full text-sm text-gray-600 hover:text-red-700 py-2 pl-4" onClick={() => setMobileNavOpen(false)}>Beyond Canvas</Link>
              <Link href="#" className="flex font-sm w-full text-sm text-gray-600 hover:text-red-700 py-2 pl-4" onClick={() => setMobileNavOpen(false)}>Temu NFT & Web3</Link>
            </li>
            <li>
              <Link href="https://forms.gle/PjrXfkEb2YtVcviP7" rel="noopener" target="_blank" className="btn-sm w-full font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 ml-3 group rounded-full">
                <span>Let's Collaborate</span>
                <svg className="w-3 h-3 fill-current shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                </svg>
              </Link>
            </li>
          </ul>          
        </Transition>
      </div>
    </div>
  )
}
