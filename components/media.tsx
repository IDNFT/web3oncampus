'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface MediaProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  media: string
  mediaWidth: number
  mediaHeight: number
}

export default function Media({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  media,
  mediaWidth,
  mediaHeight,
}: MediaProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>

      {/* Thumbnail */}
      <div>
        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
          <div className="flex flex-col justify-center">
            <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
            <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                  <use fill="#000" xlinkHref="#hero-ill-d" />
                  <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}