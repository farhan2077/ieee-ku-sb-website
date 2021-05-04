import React, { useEffect } from 'react';
import { SimpleGrid, Box, Stack, Flex, Text, Center } from '@chakra-ui/layout';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';
import SectionHeader from 'components/styled-components/SectionHeader';
import { NEWS } from 'data/news/NEWS';

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MetaDecorator title="News | IEEE KU SB" />
      <PageContainer>
        <LayoutContainer>
          <Box m={{ base: 5, md: 6 }}></Box>
          <SectionHeader sectionHeaderText="all news" />
          <Box m={{ base: 5, md: 6 }}></Box>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={12}>
            {NEWS.map(item => {
              return (
                <Stack>
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
                        {console.log(item.date)}
                        {item.date.substring(0, 2)}
                      </Text>
                      <Text color={'gray.600'} fontWeight="500">
                        {item.date.substring(3, 6)}
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
          </SimpleGrid>
          <Box mt={12} pt={4} mb={4} borderTop={'1px'} borderColor="gray.100">
            <Center color={'gray.500'}>Whew, you have reached the end!</Center>
          </Box>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
