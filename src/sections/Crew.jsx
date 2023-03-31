import React from 'react'
import { crew } from '../data'
import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Crew = () => {
  return (
    <section  className='content three' id="crew">
         <h1><span>02</span> MEET YOUR CREW</h1>
        <Swiper 
    modules={[Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
   >
        { 
            crew.map((crew, index) => (
            <SwiperSlide className="crew__container" key={index}>
                <div className='left'>
                <h1 className='role'>{crew.role}</h1>
                <h1 className='name'>{crew.name}</h1>
                <p>{crew.bio}</p>
                </div>
                <div className='right'>
                  <img src={crew.images.png} alt="img" />
                </div>
            </SwiperSlide>
          ))
        }
      
    </Swiper>
    </section>
  )
}

export default Crew
