import React from 'react';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/Footer';
import { Box } from '@chakra-ui/layout';

import imgStyle from 'components/layout/ImgStyle.module.css';

export default function PageContainer({ children }) {
  return (
    <div>
      <Box minH="100vh" display="flex" flexDir="column">
        <Navbar />
        <div style={imgStyle}>{children}</div>
        <Footer />
      </Box>
    </div>
  );
}
