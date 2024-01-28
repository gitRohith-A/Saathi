"use client"

import Image from 'next/image'
import React from 'react'
import cook from '../public/cards/cook.png'
import craft from '../public/cards/craft.png'
import paint from '../public/cards/paint.png'
import yoga from '../public/cards/yoga.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function About() {

  const data = [
    {
      heading: 'handcraft',
      image: craft
    },
    {
      heading: 'cooking',
      image: cook
    },
    {
      heading: 'painting',
      image: paint
    },
    {
      heading: 'jogging',
      image: yoga
    },
  ]



  return (
    <section className='about-us'>
      <div className="container">

        <div className="d-flex justify-content-center align-items-center flex-column">
          <h3 className='fs-42'>About us</h3>
          <p className='fs-18 text-center'>We are a platform created by a young aspiring student group to support the elderly community that is ignored by society.</p>
        </div>
        <div className="d-flex align-items-center flex-wrap">
          <Swiper
            modules={[Pagination]}
            spaceBetween={90}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {data.map((ele, index) => (
              <SwiperSlide key={ele.heading}>
                <div className="cards d-flex flex-wrap justify-content-start my-5">
                  <div className={`card-items grad-${index + 1} m-2`}>
                    <h4 className='white mx-4'>{ele.heading}</h4>
                    <Image src={ele.image} alt={ele.image} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="d-flex justify-content-center">

          <p className="fs-20 w-75 text-center">
            We provide a platform with various opportunities based on the interest of these people like handcraft, cooking, knitting, painting, yoga, music, life advice podcasts, etc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
