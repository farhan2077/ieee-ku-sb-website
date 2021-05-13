import React from 'react';
import { Text, SimpleGrid, Image, VStack, Box } from '@chakra-ui/react';

import SectionHeader from 'components/styled-components/SectionHeader';
import { WHAT_DO_WE_DO } from 'data/what-do-we-do/WHAT_DO_WE_DO';

export default function WhatWeDo() {
  return (
    <Box>
      <SectionHeader sectionHeaderText="what we do" center />
      <Box mb="3.5">&nbsp;</Box>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 3 }}
        spacing={{ base: 6, md: 10 }}
      >
        {WHAT_DO_WE_DO.map(item => {
          return (
            <VStack
              direction="vertical"
              spacing={{ base: '2', md: '5' }}
              key={item.id}
            >
              <Image
                align="center"
                boxSize="100px"
                objectFit="contain"
                src={item.image}
                alt={item.title}
              />
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="gray.600"
                textTransform="capitalize"
              >
                {item.title}
              </Text>
              <Text align="center" color="gray.600">
                {item.summary}
              </Text>
            </VStack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
