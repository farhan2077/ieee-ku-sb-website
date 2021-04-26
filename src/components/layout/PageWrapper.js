import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Box } from '@chakra-ui/layout';

export default function PageWrapper({ children }) {
  return (
    <div>
      <Box minH="100vh" display="flex" flexDir="column">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </Box>
    </div>
  );
}
