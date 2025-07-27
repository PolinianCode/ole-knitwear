

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function SliderComponent() {
     return (
       <div>
         <Swiper 
            modules={[Pagination, Autoplay]}
            spaceBetween={0} 
            slidesPerView={1} 
            loop={true}
            pagination={{
                clickable: true,
                el: '.custom-swiper-pagination',
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active'
            }}
            autoplay={{
                delay: 5000,
            }}
            speed={1000}
        >
            <SwiperSlide>
                <div className="w-full h-[calc(100vh-64px)]">
                    <img
                        src="/images/slide1.jpg"
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-[calc(100vh-64px)]">
                    <img
                        src="/images/slide2.png"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-[calc(100vh-64px)]">
                    <img
                        src="/images/slide3.png"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="custom-swiper-pagination flex justify-center gap-3 mt-6 mb-6" />
       </div>
    )
}