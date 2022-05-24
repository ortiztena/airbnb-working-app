import * as apiModel from './api';
import * as viewModel from './hotel.vm';

export const mapHotelFromApiToVM = (hotel: apiModel.Hotel): viewModel.Hotel => ({
  id: hotel.id,
  title: hotel.title,
  releaseDate: new Date(hotel.releaseDate).toLocaleDateString(undefined, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }),
  author: hotel.author,
});

export const mapHotelFromVMToApi = (hotel: viewModel.Hotel): apiModel.Hotel => {
  const [day, month, year] = hotel.releaseDate.split('/');
  return {
    id: hotel.id,
    title: hotel.title,
    releaseDate: new Date(`${year}-${month}-${day}`).toISOString(),
    author: hotel.author,
  };
};
