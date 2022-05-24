import axios from 'axios';
import { Hotel } from './hotel.api-model';

const baseUrl = '/api/hotels';

export const getHotel = async (id: string): Promise<Hotel> => {
  const { data } = await axios.get<Hotel>(`${baseUrl}/${id}`);

  return data;
};

export const saveHotel = async (hotel: Hotel): Promise<Hotel> => {
  if (hotel.id) {
    await axios.put(`${baseUrl}/${hotel.id}`, hotel);
  } else {
    const { data } = await axios.post<Hotel>(baseUrl, hotel);
    return data;
  }
};
