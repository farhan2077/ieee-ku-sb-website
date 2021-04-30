import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Button, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import './SwiperGallery.css';
import { SWIPER_GALLERY } from 'data/swiper-gallery/SWIPER_GALLERY';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
  const buttonSize = useBreakpointValue({ base: 'xs', sm: 'sm', md: 'md' });

  if (!SWIPER_GALLERY || !SWIPER_GALLERY) {
    return <div>No images in gallery yet</div>;
  } else {
    return (
      <React.Fragment>
        <Swiper
          navigation
          loop
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {SWIPER_GALLERY.map(item => (
            <SwiperSlide key={item.id}>
              <div>
                <img
                  className="swiper-gallery-image"
                  src={item.image}
                  alt={item.title}
                />
                <div className="swiper-gallery-details-container">
                  <p className="swiper-gallery-title">{item.title}</p>
                  <p className="swiper-gallery-summary">{item.summary}</p>
                  <Button
                    fontWeight={400}
                    size={buttonSize}
                    color={'white'}
                    bgColor={'blue.400'}
                    _hover={{
                      bg: 'blue.300',
                    }}
                    as={RouteLink}
                    to={item.link}
                  >
                    {item.linkText}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
    );
  }
}
