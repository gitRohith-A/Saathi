import Image from 'next/image'
import React from 'react'

import oldman from '../public/banner/old-man.svg'
import oldwomen1 from '../public/banner/old-women.svg'
import oldwomen2 from '../public/banner/old-women2.svg'
import oldwomen3 from '../public/banner/old-women3.svg'

function Banner() {
  return (
    <section className='banner'>
      <div className="banner " id='home'>
        <div className="col-sm-12 col-md-6">
          <div className="flex-column text-center">
            <h1 className='text-capitalize fs-64'>Turning <span className='green'>Dream</span> into reality</h1>
            <p className='fs-20 light-white'>We at Saathi ensure every person at their old age with the will to follow their passion or stay employed get the perfect opportunity and platform to fulfill their dreams and be independent regardless of their age.</p>
          </div>
        </div>

        <div className="col-6 d-none d-md-block">
          <div className="image-container">
            <Image src={oldman} height={510} alt='oldman'/>
            <Image src={oldwomen1} height={280} className='image-abs img-1' alt='oldman'/>
            <Image src={oldwomen2} height={230} className='image-abs img-2' alt='oldman'/>
            <Image src={oldwomen3} height={80} className='image-abs img-3' alt='oldman'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
