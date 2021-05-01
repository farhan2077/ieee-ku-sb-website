import React from 'react';

import MetaDecorator from 'components/meta/MetaDecorator';
import PageContainer from 'components/layout/PageContainer';
import LayoutContainer from 'components/layout/LayoutContainer';

export default function Events() {
  return (
    <div>
      <MetaDecorator title="Events" description="event page" />
      <PageContainer>
        <LayoutContainer>events</LayoutContainer>
      </PageContainer>
    </div>
  );
}
