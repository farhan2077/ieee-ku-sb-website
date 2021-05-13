import React from 'react';
import { Box } from '@chakra-ui/react';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';

import SwiperGallery from 'components/home/swiper-gallery/SwiperGallery';
import WhatWeDo from 'components/home/what-we-do/WhatWeDo';
import EventAndNews from 'components/home/event-and-news/EventAndNews';
import WhatPeopleSayAboutUs from 'components/home/what-people-say-about-us/WhatPeopleSayAboutUs.js';
import Affiliations from 'components/home/Affiliations';

export default function Home() {
  return (
    <div>
      <MetaDecorator title="IEEE KU SB" />
      <PageContainer>
        <SwiperGallery />
        <LayoutContainer>
          <Box mt="20"></Box>
          <WhatWeDo />
          <Box mt="28"></Box>
          <EventAndNews />
          <Box mt="28"></Box>
          <WhatPeopleSayAboutUs />
          <Box mt="28"></Box>
          <Affiliations />
          <Box mt="28"></Box>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
