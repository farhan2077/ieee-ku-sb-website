import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Button, useBreakpointValue, Text, Stack } from '@chakra-ui/react';
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
                  <Stack spacing={{ base: '3', sm: '4', md: '12' }}>
                    <Text
                      fontSize={{ base: '3xl', md: '6xl' }}
                      fontWeight={{ base: 'regular', md: 'bold' }}
                      color="white"
                      mb={{ base: 0, md: '-5' }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontSize="2xl"
                      color="white"
                      display={{ base: 'none', md: 'block' }}
                    >
                      {item.summary}
                    </Text>
                    <Button
                      size={buttonSize}
                      colorScheme={'teal'}
                      bgColor={'teal.500'}
                      as={RouteLink}
                      to={item.link}
                    >
                      {item.linkText}
                    </Button>
                  </Stack>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
    );
  }
}
