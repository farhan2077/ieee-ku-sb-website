import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Box, Link, Grid, VStack } from '@chakra-ui/react';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';

import SwiperGallery from 'components/swiper-gallery/SwiperGallery';

export default function Home() {
  return (
    <div>
      <MetaDecorator title="Home" description="home page" />
      <PageContainer>
        <SwiperGallery />
        <LayoutContainer>
          <Box textAlign="center" fontSize="xl">
            <Grid p={3}>
              <VStack>
                <Link as={RouteLink} to="/about">
                  Go to about page
                </Link>
              </VStack>
            </Grid>
          </Box>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
