'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState, useRef, Fragment } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from "react";
import { Pagination, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

interface SliderProps {
  thumb1: StaticImageData;
  thumb2: StaticImageData;
  thumb3: StaticImageData;
  thumb4: StaticImageData
}

export default function Slider({
  thumb1,
  thumb2,
  thumb3,
  thumb4

}: SliderProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLMediaElement>(null);
  const feedbacks = [
    {
      src : thumb1 
    },
    {
      src : thumb2
    },
    {
      src : thumb3
    },
    {
      src : thumb4
    }
  ]

  return (
    <div className="test-slider content-center">
      {/* Gallery Slider */}
      <Swiper spaceBetween={10} slidesPerView={'auto'}
      modules={[Pagination, A11y, EffectCoverflow, Autoplay]}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      >

        {/* Swiper Slide */}
        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb1} width={640} height={360} alt="documentation" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb2} width={640} height={360} alt="documentation" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb3} width={640} height={360} alt="documentation" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb4} width={640} height={360} alt="documentation" />
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
