import { Link as RouteLink } from 'react-router-dom';
import { Text, Flex, Link } from '@chakra-ui/react';

import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';

export default function PageNotImplemented() {
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
            <Text>This page is under development ... 😴 😴 😴</Text>
            <Link textDecoration="underline" as={RouteLink} to="/" mt="2">
              Go to home
            </Link>
          </Flex>
        </LayoutContainer>
      </PageContainer>
    </div>
  );
}
