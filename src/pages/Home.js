import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Box, Link, Grid, VStack } from '@chakra-ui/react';

import PageContainer from '../components/layout/PageContainer';
import MetaDecorator from '../components/meta/MetaDecorator';

export default function Home() {
  return (
    <div>
      <MetaDecorator title="Home" description="home page" />
      <PageContainer>
        <Box textAlign="center" fontSize="xl">
          <Grid p={3}>
            <VStack>
              <Link as={RouteLink} to="/about">
                Go to about page
              </Link>
            </VStack>
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
}
