import React from 'react';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';

export default function News() {
  return (
    <div>
      <MetaDecorator title="News | IEEE KU SB" />
      <PageContainer>
        <LayoutContainer>news</LayoutContainer>
      </PageContainer>
    </div>
  );
}
