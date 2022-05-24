import React from 'react';
import { AppLayout } from 'layouts';
import { HotelContainer } from 'pods/hotel';

export const HotelScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      {({ className }) => <HotelContainer className={className} />}
    </AppLayout>
  );
};
