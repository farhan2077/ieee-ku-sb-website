import { Link as RouteLink } from 'react-router-dom';
import { Flex, Link, Text } from '@chakra-ui/react';

import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';

export default function NotFound() {
  return (
    <div>
      <PageContainer>
        <LayoutContainer>
          <Flex
            minH="55vh"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="6xl" color="red.500" fontWeight="bold">
              Error 404!
            </Text>
            <Text mt="3">Page not found 🙁</Text>
            <Link textDecoration="underline" as={RouteLink} to="/" mt="2">
              Go to home
            </Link>
          </Flex>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
