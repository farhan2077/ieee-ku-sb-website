import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Stack, Box, Text, Badge, Flex, Spacer, Link } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { parseISO, format } from 'date-fns';
import { Icon } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';

import SectionHeader from 'components/styled-components/SectionHeader';
import { EVENTS } from 'data/events/EVENTS';

const maxCount = 3;

export default function Event() {
  return (
    <Stack>
      <Flex align="center">
        <SectionHeader sectionHeaderText="events" />
        <Spacer />
        <Link
          as={RouteLink}
          to="/events"
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
          {EVENTS.slice(0, maxCount).map(item => {
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
                <Box w={{ base: 'full', sm: 'full', md: '30%' }}>
                  <Text color={'gray.600'} fontWeight="500">
                    {format(parseISO(item.startDate), 'MMM dd, yyyy')}
                  </Text>
                </Box>
                <Box w={{ base: 'full', sm: 'full', md: '70%' }}>
                  <Stack>
                    <Box>
                      <Text
                        color={'gray.800'}
                        fontSize="lg"
                        fontWeight="500"
                        mb="-2"
                        display="inline-block"
                        mr="2"
                        lineHeight="1.3"
                      >
                        {item.name}
                      </Text>
                      <Badge colorScheme="green">
                        {item.status && item.status}
                      </Badge>
                    </Box>
                    <Stack direction="row">
                      {item.location && (
                        <Flex align="center" mr="6">
                          <Icon as={BiMap} color={'gray.600'} h="5" w="5" />
                          <Text color={'gray.600'} ml="0.5">
                            {item.location}
                          </Text>
                        </Flex>
                      )}
                      {item.startTime && (
                        <Flex align="center">
                          <TimeIcon color={'gray.600'} h="4" w="4" />
                          <Text color={'gray.600'} ml="1.5">
                            {item.startTime}
                          </Text>
                        </Flex>
                      )}
                    </Stack>
                    <Text color={'gray.500'}>{item.summary}</Text>
                  </Stack>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}
