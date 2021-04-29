import React from 'react';
import { Box } from '@chakra-ui/react';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';

import SwiperGallery from 'components/home/swiper-gallery/SwiperGallery';
import WhatDoWeDo from 'components/home/what-do-we-do/WhatDoWeDo';

export default function Home() {
  return (
    <div>
      <MetaDecorator title="Home" description="home page" />
      <PageContainer>
        <SwiperGallery />
        <LayoutContainer>
          <Box mt="20"></Box>
          <WhatDoWeDo />
          <Box mt="20"></Box>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
