import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    { src: '/search.webp', caption: 'Google Search App' },
    { src: '/golang.webp', caption: 'Golang Dev Site' },
    { src: '/bloom3.webp', caption: 'BloombergGreen 2024' },
    { src: '/arvr.webp', caption: 'Google AR & VR' },
    { src: '/mlhub.webp', caption: 'Google ML Hub' },
    { src: '/tnf.webp', caption: 'Prime TNF' },
];

const ImageCarousel = () => {
return (
    <div style={{ maxWidth: '90vw', margin: '0 auto' }}>
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        }}
    >
        {images.map((image, index) => (
        <SwiperSlide key={index} className='swiperslide'>
            <div style={{ textAlign: 'center' }}>
            <img
                className='carousel-image'
                src={image.src}
                alt={`Slide ${index}`}
                // style={{
                // width: '100%',
                // height: 'auto',
                // maxHeight: '19.6rem',
                // borderRadius: '12px',
                // objectFit: 'cover',
                // objectPosition: 'top'
                // }}
                loading="lazy"
            />
            <p style={{ marginTop: '0.5rem', marginBottom: '2rem' , fontSize: '1.5rem', color: '#000000', fontWeight: 'bolder' }}>
                {image.caption}
            </p>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
    );
};


export default ImageCarousel;
