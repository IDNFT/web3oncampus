'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Slider from '@/components/utils/slider'
import Link from 'next/link'
import Thumb1 from '@/public/images/hero-image.png'
import Thumb2 from '@/public/images/hero-image.png'
import Thumb3 from '@/public/images/hero-image.png'
import Thumb4 from '@/public/images/hero-image.png'

export default function GalleryWeb3Campus() {
  
  const tabs = useRef<HTMLDivElement>(null)
      
  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }
      
  useEffect(() => {
    heightFix()
  }, []) 
        
  return (
    <section className='relative'>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-white pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
  
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-4">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700" data-aos="zoom-y-out" data-aos-delay="150">Gallery</h1>
            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Gallery */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">

            {/* 1st Program */}
            <div data-aos="fade-up">
              <div>
                <div>
                  <Slider             
                  thumb1={Thumb1}
                  thumb2={Thumb2}
                  thumb3={Thumb3}
                  thumb4={Thumb4} 
                  />
               </div>
              </div>
              <div>
            </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}