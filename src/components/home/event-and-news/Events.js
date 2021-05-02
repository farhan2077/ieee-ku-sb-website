import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Stack, Box, Text, Badge, Flex, Spacer, Link } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
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
          {EVENTS.slice(0, maxCount).map(event => {
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
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                  as={RouteLink}
                  to={`/events/${event.id}`}
                >
                  <Box w={{ base: 'full', sm: 'full', md: '30%' }}>
                    <Text color={'gray.600'} fontWeight="500">
                      {event.startDate}
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
                          {event.name}
                        </Text>
                        <Badge colorScheme="blue">
                          {event.status && event.status}
                        </Badge>
                      </Box>
                      <Stack direction="row">
                        {event.location && (
                          <Flex align="center" mr="6">
                            <Icon as={BiMap} color={'gray.600'} h="5" w="5" />
                            <Text color={'gray.600'} ml="0.5">
                              {event.location}
                            </Text>
                          </Flex>
                        )}
                        {event.startTime && (
                          <Flex align="center">
                            <TimeIcon color={'gray.600'} h="4" w="4" />
                            <Text color={'gray.600'} ml="1.5">
                              {event.startTime}
                            </Text>
                          </Flex>
                        )}
                      </Stack>
                      <Text color={'gray.500'}>{event.summary}</Text>
                    </Stack>
                  </Box>
                </Link>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}
