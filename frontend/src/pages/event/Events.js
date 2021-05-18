import React, { useEffect, useState } from 'react';
import { Link as RouteLink, useHistory } from 'react-router-dom';
import { Stack, Box, Text, Badge, Flex, Link } from '@chakra-ui/layout';
import {
  TimeIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import qs from 'query-string';
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
} from 'chakra-paginator';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';
import SectionHeader from 'components/styled-components/SectionHeader';
import { agent } from 'helpers/agent';

export default function Events() {
  const history = useHistory();
  const query = qs.parse(window.location.search);

  console.log(query.page);

  const [eventsData, setEventsData] = useState([]);
  const [totalEventsInfo, setTotalEventsInfo] = useState('');
  const [currentPage, setCurrentPage] = useState(parseInt(query.page) || 1);
  const perPage = parseInt(query.pageSize) || 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchEvents = () => {
      const queryString = qs.stringify({
        page: currentPage,
        perPage,
      });

      agent
        .getEvents(queryString)
        .then(res => res.json())
        .then(({ data }) => {
          setTotalEventsInfo(data);
          setEventsData(data.events);
        });
    };

    fetchEvents();
  }, [currentPage, perPage]);

  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const baseStyles = {
    w: 8,
    h: 8,
    fontSize: 'sm',
  };

  const normalStyles = {
    ...baseStyles,
    _hover: {
      bg: 'blue.200',
    },
    bg: 'gray.100',
  };

  const activeStyles = {
    ...baseStyles,
    _hover: {
      bg: 'blue.200',
    },
    bg: 'blue.100',
  };

  const separatorStyles = {
    w: 8,
    h: 8,
    bg: 'white',
  };

  const handlePageChange = nextPage => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log('request new data with ->', nextPage);

    setCurrentPage(nextPage);

    history.push({
      search: `?page=${nextPage}`,
    });
  };

  return (
    <div>
      <MetaDecorator title="Events | IEEE KU SB" />
      <PageContainer>
        <LayoutContainer>
          <Box m={{ base: 5, md: 6 }}></Box>
          <SectionHeader sectionHeaderText="all events" />
          <Box m={{ base: 5, md: 8 }}></Box>
          {eventsData.map(event => {
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
            <Paginator
              normalStyles={normalStyles}
              activeStyles={activeStyles}
              separatorStyles={separatorStyles}
              innerLimit={innerLimit}
              outerLimit={outerLimit}
              currentPage={currentPage}
              pagesQuantity={totalEventsInfo.maxPages}
              onPageChange={handlePageChange}
            >
              <Container align="center" justify="space-between" w="full" py={4}>
                <Box display={{ base: 'none', md: 'block' }}>
                  <Previous>
                    <Icon as={ChevronLeftIcon} h={5} w={5} />
                    Previous
                  </Previous>
                </Box>
                <PageGroup isInline align="center" />
                <Box display={{ base: 'none', md: 'block' }}>
                  <Next>
                    Next
                    <Icon as={ChevronRightIcon} h={5} w={5} />
                  </Next>
                </Box>
              </Container>
            </Paginator>
          </Box>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
