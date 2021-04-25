import React from 'react';
import MetaDecorator from '../components/meta/MetaDecorator';

import { Link as RouteLink } from 'react-router-dom';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

export default function Home() {
  return (
    <div>
      <MetaDecorator title="Home" description="home page" />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
            <RouteLink to="/about">Go to about page</RouteLink>
          </VStack>
        </Grid>
      </Box>
    </div>
  );
}
