import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Stack, Box, Text, Flex, Spacer, Link } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

import SectionHeader from 'components/styled-components/SectionHeader';
import { NEWS } from 'data/news/NEWS';

const maxCount = 3;

export default function News() {
  return (
    <Stack>
      <Flex align="center">
        <SectionHeader sectionHeaderText="news" />
        <Spacer />
        <Link
          as={RouteLink}
          to="/news"
          color="gray.600"
          _hover={{
            color: 'gray.800',
          }}
          mr={{ base: 0, sm: 0, md: 0, lg: '1' }}
        >
          See all
        </Link>
      </Flex>
      <Box m="6"></Box>
      <Box
        maxH={{ base: 'auto', sm: 'auto', md: '450px' }}
        overflowY="auto"
        rounded="xl"
      >
        <Stack padding={{ base: '2', sm: '5', md: 5 }} bgColor="gray.50">
          {NEWS.slice(0, maxCount).map(item => {
            return (
              <Stack
                direction={{ base: 'column', sm: 'column', md: 'row' }}
                rounded="xl"
                padding={{ base: '2', sm: '5', md: 4 }}
                transition={'all .1s ease'}
                _hover={{
                  bg: 'white',
                }}
              >
                <Box>
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    bg="blue.100"
                    rounded="xl"
                    h={{ base: 14, md: '16' }}
                    w={{ base: 14, md: '16' }}
                  >
                    <Text
                      color={'gray.600'}
                      fontWeight="600"
                      fontSize="xl"
                      mb="-1"
                    >
                      {format(parseISO(item.date), 'dd')}
                    </Text>
                    <Text color={'gray.600'} fontWeight="500">
                      {format(parseISO(item.date), 'MMM')}
                    </Text>
                  </Flex>
                  <Text
                    mt="3.5"
                    color={'gray.800'}
                    fontSize="lg"
                    fontWeight="500"
                    display="inline-block"
                    lineHeight="1.3"
                  >
                    {item.name}
                  </Text>
                  <Text mt="2" color="gray.600">
                    {item.summary}
                  </Text>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}
