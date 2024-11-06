import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination } from 'swiper/modules';
import { HeroSwiper } from '../Data';
import { Link } from 'react-router-dom';

// imgs
import next from '../assets/hero/next.svg'
const Hero = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}

          
          className="mySwiper"
        >
            {HeroSwiper.map((slide) => (
                <SwiperSlide 
                    key={slide.id} 
                    className={`w-[570px] h-[300px] relative `} 
                    style={{ background: slide.styles.backgroundGradient }}
                >
                    <Link className="flex justify-between items-center">
                        {/* Left Section */}
                        <div>
                            <h3 className={slide.styles.title}>{slide.title}</h3>
                            <p className={slide.styles.text}>{slide.sharx}</p>
                        </div>
                        {/* Right Section (Image) */}
                        <img src={slide.img} alt={slide.title} className={slide.styles.img} />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;