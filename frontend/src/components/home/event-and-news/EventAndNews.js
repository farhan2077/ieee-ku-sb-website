import React from 'react';
import { Stack, Box } from '@chakra-ui/react';

import Events from 'components/home/event-and-news/Events';
import News from 'components/home/event-and-news/News';

export default function EventAndNews() {
  return (
    <Stack
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      spacing="20"
    >
      <Box w={{ base: 'full', sm: 'full', md: 'full', lg: '65%' }}>
        <Events />
      </Box>
      <Box w={{ base: 'full', sm: 'full', md: 'full', lg: '35%' }}>
        <News />
      </Box>
    </Stack>
  );
}
