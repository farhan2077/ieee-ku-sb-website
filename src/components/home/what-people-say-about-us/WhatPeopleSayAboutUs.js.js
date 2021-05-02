import React from 'react';
import { Stack, Avatar, Box, Text, SimpleGrid, Icon } from '@chakra-ui/react';

import SectionHeader from 'components/styled-components/SectionHeader';
import { WHAT_PEOPLE_SAY_ABOUT_US } from 'data/what-people-say-about-us/WHAT_PEOPLE_SAY_ABOUT_US';

const QuoteIcon = props => (
  <Icon viewBox="0 0 975.036 975.036" {...props}>
    <path
      fill="currentColor"
      d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
    ></path>
  </Icon>
);

export default function WhatPeopleSayAboutUs() {
  return (
    <Box>
      <Stack spacing={{ base: 3, sm: 3, md: 4 }}>
        <SectionHeader sectionHeaderText="what people say about us" center />
        <SimpleGrid
          columns={{ base: '1', sm: '1', md: '2' }}
          spacing={{ base: 2, sm: 4, md: 10 }}
        >
          {WHAT_PEOPLE_SAY_ABOUT_US.map(item => {
            return (
              <Stack
                key={item.id}
                mt="8"
                px={{ base: 2, md: 10 }}
                spacing={{ base: 4, md: 6 }}
                align={'center'}
                direction={'column'}
              >
                <QuoteIcon
                  color="gray.400"
                  h="8"
                  w="auto"
                  mb={{ base: 0, sm: 0, md: -1.5 }}
                />
                <Text color="gray.600" textAlign={'center'} maxW={'3xl'}>
                  {item.speech}
                </Text>
                <Box textAlign={'center'}>
                  <Avatar
                    src={item.image}
                    alt={'Jenny Wilson'}
                    size="lg"
                    mb={4}
                  />
                  <Text color={'gray.800'} fontSize="lg" fontWeight="500">
                    {item.name}
                  </Text>
                  <Text fontSize={'sm'} color={'gray.400'}>
                    {item.position}
                  </Text>
                </Box>
              </Stack>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
