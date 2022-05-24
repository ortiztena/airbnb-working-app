import React from 'react';
import { AppLayout } from 'layouts';
import { HotelListContainer } from 'pods/hotel-list';

export const HotelListScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      {({ className }) => <HotelListContainer className={className} />}
    </AppLayout>
  );
};
