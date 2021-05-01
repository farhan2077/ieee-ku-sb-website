import React from 'react';
import { Image, Box } from '@chakra-ui/react';

import SectionHeader from 'components/styled-components/SectionHeader';

import router from 'data/affiliations/images/router.jpg';

export default function Affiliations() {
  return (
    <div>
      <SectionHeader sectionHeaderText="affiliations" center />
      <Box align="center" mt="8">
        <Image height="20" width="auto" src={router} alt="Router" />
      </Box>
    </div>
  );
}
