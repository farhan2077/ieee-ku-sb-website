import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Text, Box, Badge, Flex } from '@chakra-ui/layout';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { Icon, Image, AspectRatio } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';
import EventBreadcrumb from 'components/event/EventBreadcrumb';

import { EVENTS } from 'data/events/EVENTS';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Event() {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const event = EVENTS.find(event => event.id === parseInt(id));
    setEvent(event);
  }, [id]);

  return (
    <div>
      <MetaDecorator title="Event details | IEEE KU SB" />
      <PageContainer>
        <LayoutContainer>
          <Stack spacing="4">
            <EventBreadcrumb />
            <Box px="3">
              <hr />
            </Box>
            <Box mt="5" px="3" py="2">
              <Stack spacing={{ base: '5', md: '10' }}>
                {/* title section */}
                <Text
                  align="center"
                  color="gray.700"
                  fontSize={{ base: 'xl', sm: '2xl', md: '5xl' }}
                  fontWeight="500"
                  lineHeight="1.2"
                >
                  {event.name}
                </Text>
                {/* details section */}
                <Stack
                  direction={{
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                  }}
                  spacing={{ base: '3', md: '10' }}
                >
                  <Box w={{ base: 'full', sm: 'full', md: 'full', lg: '25%' }}>
                    {event.status && (
                      <Box>
                        <Badge colorScheme="blue">{event.status}</Badge>
                        <Box mt={{ base: '1.5', md: '3' }}>
                          <hr />
                        </Box>
                      </Box>
                    )}

                    {event.startDate && (
                      <Box my={{ base: '1.5', md: '3' }}>
                        <Flex align="center">
                          <CalendarIcon color={'gray.500'} h="4" w="4" />
                          <Text color={'gray.500'} ml="2">
                            <Text>{event.startDate}</Text>
                          </Text>
                        </Flex>
                        <Box mt={{ base: '1.5', md: '3' }}>
                          <hr />
                        </Box>
                      </Box>
                    )}

                    {event.startTime && (
                      <Box my={{ base: '1.5', md: '3' }}>
                        <Flex align="center">
                          <TimeIcon color={'gray.500'} h="4" w="4" />
                          <Text color={'gray.500'} ml="2">
                            <Text>{event.startTime}</Text>
                          </Text>
                        </Flex>
                        <Box mt={{ base: '1.5', md: '3' }}>
                          <hr />
                        </Box>
                      </Box>
                    )}

                    {event.location && (
                      <Box my={{ base: '1.5', md: '3' }}>
                        <Flex align="center">
                          <Icon
                            as={BiMap}
                            color={'gray.500'}
                            ml="-0.5"
                            h="5"
                            w="5"
                          />
                          <Text color={'gray.500'} ml="1">
                            {event.location}
                          </Text>
                        </Flex>
                      </Box>
                    )}
                  </Box>
                  <Box w={{ base: 'full', sm: 'full', md: 'full', lg: '75%' }}>
                    <AspectRatio maxH="500px" ratio={16 / 9}>
                      {event && event.images && event.images.length > 1 ? (
                        <Swiper
                          navigation
                          loop
                          pagination={{
                            clickable: true,
                            dynamicBullets: true,
                          }}
                          autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                          }}
                          spaceBetween={50}
                          slidesPerView={1}
                        >
                          {event &&
                            event.images &&
                            event.images.map(image => (
                              <SwiperSlide>
                                <Image
                                  objectFit="cover"
                                  src={image.image}
                                  alt="Event"
                                />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                      ) : (
                        <div>
                          {event &&
                            event.images &&
                            event.images.map(image => (
                              <SwiperSlide>
                                <Image
                                  objectFit="cover"
                                  src={image.image}
                                  alt="Event"
                                />
                              </SwiperSlide>
                            ))}
                        </div>
                      )}
                    </AspectRatio>

                    <Box mb="-6" mt="6">
                      {event &&
                        event.details &&
                        event.details.map(item => {
                          return (
                            <Box key={item.paragraph} my={4}>
                              <Text color="gray.700">{item.paragraph}</Text>
                            </Box>
                          );
                        })}
                    </Box>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Box m={6}></Box>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
