import * as apiModel from './api';
import * as viewModel from './hotel-list.vm';

const mapHotelFromApiToVM = (hotel: apiModel.Hotel): viewModel.Hotel => ({
  id: hotel.id,
  title: hotel.title,
  releaseDate: new Date(hotel.releaseDate).toLocaleDateString(undefined, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }),
  author: hotel.author,
});

export const mapHotelListFromApiToVM = (
  hotelList: apiModel.Hotel[]
): viewModel.Hotel[] =>
  Array.isArray(hotelList) ? hotelList.map(mapHotelFromApiToVM) : [];
