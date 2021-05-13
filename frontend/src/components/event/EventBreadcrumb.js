import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import { ChevronRightIcon } from '@chakra-ui/icons';

export default function EventBreadcrumb() {
  return (
    <Box borderRadius="md" px="3" py="2" mt="4">
      <Breadcrumb
        spacing="8px"
        color="gray.600"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={RouteLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={RouteLink} to="/events">
            Events
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}
