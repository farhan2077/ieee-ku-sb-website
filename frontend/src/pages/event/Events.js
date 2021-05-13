import React, { useEffect } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Stack, Box, Text, Badge, Flex, Link, Center } from '@chakra-ui/layout';
import { TimeIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';
import SectionHeader from 'components/styled-components/SectionHeader';
import { EVENTS } from 'data/events/EVENTS';

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MetaDecorator title="Events | IEEE KU SB" />
      <PageContainer>
        <LayoutContainer>
          <Box m={{ base: 5, md: 6 }}></Box>
          <SectionHeader sectionHeaderText="all events" />
          <Box m={{ base: 5, md: 8 }}></Box>
          {EVENTS.map(event => {
            return (
              <Stack
                direction={{ base: 'column', sm: 'column', md: 'row' }}
                spacing={{ base: 1, md: 0 }}
              >
                <Box w={{ base: 'full', sm: 'full', md: '20%' }}>
                  <Text color={'gray.600'} fontWeight="500">
                    {event.startDate}
                  </Text>
                </Box>
                <Box w={{ base: 'full', sm: 'full', md: '80%' }}>
                  <Stack>
                    <Box>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                        as={RouteLink}
                        to={`/events/${event.id}`}
                      >
                        <Text
                          color={'gray.800'}
                          fontSize="lg"
                          fontWeight="500"
                          mb="-2"
                          display="inline-block"
                          mr="2"
                          lineHeight="1.3"
                          _hover={{
                            textDecoration: 'underline',
                          }}
                        >
                          {event.name}
                        </Text>
                      </Link>

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
                    <Link
                      as={RouteLink}
                      to={`/events/${event.id}`}
                      color={'blue.400'}
                    >
                      <Flex align={'center'}>
                        <Text>Read more</Text>
                        <ArrowForwardIcon ml={2} w={4} h={4} />
                      </Flex>
                    </Link>
                  </Stack>
                  <Box my={{ base: 6, md: 10 }}>
                    <hr />
                  </Box>
                </Box>
              </Stack>
            );
          })}
          <Box mt={{ base: -2, md: -6 }} mb={4}>
            <Center color={'gray.500'}>Whew, you have reached the end!</Center>
          </Box>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
