import React from 'react';
import { Text } from '@chakra-ui/react';

export default function SectionHeader({ sectionHeaderText, center }) {
  return (
    <Text
      fontFamily={'section'}
      fontSize="4xl"
      textAlign={center ? 'center' : ''}
      color="blue.400"
      textTransform="capitalize"
      fontWeight="600"
      sx={{ letterSpacing: '-0.04em', lineHeight: '1' }}
    >
      {sectionHeaderText}
    </Text>
  );
}
