'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState, useRef, Fragment } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from "react";
import Media from '../media';
import { Pagination, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

// Import Logo Media Partner
import Web3CampusLogo from "@/public/illustration/web3-campus.png"

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
  thumb4,

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
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      >

        {/* Swiper Slide */}
        <SwiperSlide>
         <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb1}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3CampusLogo} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">IDNFT Gelar Edukasi Web3 on Campus di Universitas Brawijaya Malang</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Tempo -</span> IDNFT, Komunitas NFT dan Web3 terbesar di Indonesia, menyelenggarakan program Web3 On Campus di Universitas Brawijaya Malang, pada Senin, 25 September 2023. Acara yang diikuti 183 peserta baik secara daring maupun luring ini berlangsung di Gedung Lab. Industri Kreatif & Digital, Fakultas Vokasi, Kampus Dieng Universitas Brawijaya. Para peserta datang dari berbagai jurusan, mulai dari Desain Komunikasi Visual, Desain Grafis, dan Administrasi Bisnis.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://event.tempo.co/amp/1780457/idnft-gelar-edukasi-web3-on-campusdi-universitas-brawijaya-malang&ved=2ahUKEwjw9u2Q3eqBAxVUzzgGHagJAfMQFnoECAoQAQ&usg=AOvVaw3zkgGUZP-suvylTmYIGkMv">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb2}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3CampusLogo} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Indonesia Miliki Potensi Peluang Karier di Industri Blockchain dan Web3</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Liputan6 -</span> Industri blockchain dan Web3 telah mengalami pertumbuhan yang pesat di seluruh dunia, termasuk di Indonesia. Teknologi ini telah mengubah cara manusia berinteraksi dengan internet dan membuka peluang karir yang menarik di berbagai sektor. 
                Dengan menggunakan teknologi blockchain yang aman dan transparan, blockchain dapat digunakan dalam berbagai industri seperti keuangan, logistik, kesehatan, dan banyak lagi. Di Indonesia, beberapa sektor yang mendorong adopsi blockchain adalah perbankan, asuransi, logistik, dan sumber daya manusia.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://www.liputan6.com/crypto/read/5333740/indonesia-miliki-potensi-peluang-karier-di-industri-blockchain-dan-web3">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb3}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3CampusLogo} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Kenalkan Dunia NFT dan Web3 pada Mahasiswa, IDNFT Lakukan Program Edukasi Web3 On Campus di Kampus Universitas Negeri Malang</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Coinfolks -</span> Perkembangan teknologi yang cepat membuat Web3 dan NFT menjadi populer di Indonesia termasuk kalangan mahasiswa. Alasannya, perkembangan teknologi memberi kemudahan dan rasa aman bagi para kreator, investor atau buyer dalam menciptakan maupun membeli aset digital yang unik serta ber-value tinggi. Kegemparan ini mendorong IDNFT- Komunitas NFT dan Web3 terbesar di Indonesia untuk mengenalkan lebih jauh seputar NFT, Web3, Blockchain, Crypto, dan Metaverse pada mahasiswa. Tujuan utama program ini adalah mendukung Tridharma Perguruan Tinggi serta memberikan sosialisasi dan edukasi tentang perkembangan industri tersebut di Indonesia. </blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://coinfolks.id/berita/idnft-lakukan-program-edukasi-web3-on-campus-di-kampus-universitas-negeri-malang/&ved=2ahUKEwjumKLsuu2BAxWi1zgGHTd8C9kQFnoECA0QAQ&usg=AOvVaw00BCsZsggEoHtOeVRYYTi9">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb4}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3CampusLogo} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Web3 on Campus Universitas Gadjah Mada  “Perkembangan, Isu, dan Potensi pada Industri Web3”</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Coinfolks -</span> IDNFT, komunitas Web3 dan NFT terbesar di Indonesia, telah sukses mengadakan Web3 on Campus di Universitas Gadjah Mada yang berkolaborasi dengan Tokocrypto sebagai Program Partner. Berkeinginan untuk memberikan edukasi dan pemahaman tentang Perkembangan Industri Web3, teknologi blockchain, perkembangan NFT, crypto dan metaverse. Edukasi ini tentunya bertujuan untuk diberikan kepada mahasiswa agar dapat mengikuti perkembangan teknologi dan mampu memanfaatkannya sebaik mungkin.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://coinfolks.id/berita/web3-on-campus-universitas-gadjah-mada-perkembangan-isu-dan-potensi-pada-industri-web3/">See More</a>
             </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
