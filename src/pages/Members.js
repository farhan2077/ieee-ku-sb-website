import React, { useEffect } from 'react';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import { Avatar, VisuallyHidden, chakra, Link } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';
import SectionHeader from 'components/styled-components/SectionHeader';

import { MEMBERS } from 'data/member/MEMBER';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={'blue.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      color={'blue.600'}
      href={href}
      border="2px"
      borderColor="white"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'cyan.100',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Members() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MetaDecorator title="Members | IEEE KU SB" />
      <PageContainer>
        <LayoutContainer>
          <Box m={{ base: 5, md: 6 }}></Box>
          <SectionHeader sectionHeaderText="all members" />
          <Box m={{ base: 5, md: 6 }}></Box>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={10} my="10">
            {MEMBERS.map(member => {
              return (
                <Box key={member.name} minH={'210px'}>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box position="relative">
                      <Avatar size={'2xl'} src={member.image} />
                      <Box position="absolute" bottom="1" right="1">
                        <Link
                          isExternal
                          href={member && member.facebook && member.facebook}
                        >
                          <SocialButton label={'Facebook ID link'}>
                            <FaFacebookF />
                          </SocialButton>
                        </Link>
                      </Box>
                    </Box>
                    <Text
                      align="center"
                      textTransform="capitalize"
                      fontSize="lg"
                      mt="5"
                      color="gray.800"
                    >
                      {member.name}
                    </Text>
                    <Text
                      align="center"
                      textTransform="capitalize"
                      color="gray.500"
                    >
                      {member.position}
                    </Text>
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
