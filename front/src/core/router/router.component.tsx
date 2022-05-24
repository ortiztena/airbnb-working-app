import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotelListScene, HotelScene, UserScene } from 'scenes';
import { switchRoutes } from './routes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={LoginScene} />
        <Route
          exact={true}
          path={switchRoutes.hotelList}
          component={HotelListScene}
        />
        <Route
          exact={true}
          path={switchRoutes.createHotel}
          component={HotelScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editHotel}
          component={HotelScene}
        />
        <Route exact={true} path={switchRoutes.user} component={UserScene} />
      </Switch>
    </HashRouter>
  );
};
