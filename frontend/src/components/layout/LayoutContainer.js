import React from 'react';
import { Box } from '@chakra-ui/layout';

export default function LayoutContainer({ children }) {
  return (
    <div>
      <Box maxW="6xl" margin="0 auto" px="3">
        {children}
      </Box>
    </div>
  );
}
