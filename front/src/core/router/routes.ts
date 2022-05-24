import { generatePath } from './routes.helpers';

interface BaseRoutes {
  root: string;
  hotelList: string;
  createHotel: string;
  editHotel: string;
  user: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  hotelList: '/hotel-list',
  createHotel: '/hotel-list/create',
  editHotel: '/hotel-list/:id',
  user: '/user',
};

type SwitchRoutes = BaseRoutes;

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes,
};

interface LinkRoutes extends Omit<BaseRoutes, 'editHotel'> {
  editHotel: ({ id: string }) => string;
}

export const linkRoutes: LinkRoutes = {
  ...baseRoutes,
  editHotel: (params) => generatePath(baseRoutes.editHotel, { ...params }),
};
