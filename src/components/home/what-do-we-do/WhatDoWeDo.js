import React from 'react';
import { Text, Stack, SimpleGrid, Image, VStack, Box } from '@chakra-ui/react';

import SectionHeader from 'components/styled-components/SectionHeader';
import { WHAT_DO_WE_DO } from 'data/what-do-we-do/WHAT_DO_WE_DO';

export default function WhatWeDo() {
  return (
    <Box>
      <Stack>
        <SectionHeader sectionHeaderText="what do we do?" center />
        <Text
          px={{ base: 0, sm: 0, md: 44 }}
          pb="10"
          pt="3"
          color="gray.600"
          align="center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          illum. Enim veniam dolor sapiente adipisci inventore aut autem quos
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={10}>
          {WHAT_DO_WE_DO.map(item => {
            return (
              <VStack direction="vertical" spacing="5" key={item.id}>
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
      </Stack>
    </Box>
  );
}
