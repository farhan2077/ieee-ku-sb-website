import React from 'react';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/Footer';
import { Box } from '@chakra-ui/layout';

export default function PageContainer({ children }) {
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
