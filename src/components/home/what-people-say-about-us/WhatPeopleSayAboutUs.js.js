import React from 'react';
import { Stack, Avatar, Box, Text, SimpleGrid } from '@chakra-ui/react';

import SectionHeader from 'components/styled-components/SectionHeader';
import { WHAT_PEOPLE_SAY_ABOUT_US } from 'data/what-people-say-about-us/WHAT_PEOPLE_SAY_ABOUT_US';

export default function WhatPeopleSayAboutUs() {
  return (
    <Box>
      <Stack>
        <SectionHeader sectionHeaderText="what people say about us" center />
        <SimpleGrid columns={{ base: '1', sm: '1', md: '2' }} spacing={10}>
          {WHAT_PEOPLE_SAY_ABOUT_US.map(item => {
            return (
              <Stack
                key={item.id}
                mt="8"
                px={10}
                spacing={{ base: 8, md: 10 }}
                align={'center'}
                direction={'column'}
              >
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
