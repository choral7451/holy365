"use client"

import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import Image from "next/image";

const images = [
  "https://ycuajmirzlqpgzuonzca.supabase.co/storage/v1/object/public/artinfo/advertisements/banneryougo.png",
  "https://ycuajmirzlqpgzuonzca.supabase.co/storage/v1/object/public/artinfo/lessons/56bcf767-1591-4b9f-a964-c8bb7e487775/1703125972384.png"
]

function Banner() {
  return (
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="relativ h-[200px] md:h-[500px] max-w-screen-lg">
                <Image src={image} alt={'banner' + idx} fill/>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
  );
}

export default Banner;