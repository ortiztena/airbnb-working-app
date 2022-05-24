import React from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbarContext } from 'common/components';
import * as api from './api';
import { Hotel, createEmptyHotel } from './hotel.vm';
import { HotelComponent } from './hotel.component';
import { mapHotelFromApiToVM, mapHotelFromVMToApi } from './hotel.mappers';

interface Props {
  className?: string;
}

interface Params {
  id: string;
}

export const HotelContainer: React.FunctionComponent<Props> = (props) => {
  const { className } = props;
  const { id } = useParams<Params>();
  const isEditMode = Boolean(id);
  const [hotel, setHotel] = React.useState<Hotel>(createEmptyHotel());
  const { showMessage } = useSnackbarContext();

  const handleLoadHotel = async () => {
    const apiHotel = await api.getHotel(id);
    setHotel(mapHotelFromApiToVM(apiHotel));
  };

  React.useEffect(() => {
    if (isEditMode) {
      handleLoadHotel();
    }
  }, [isEditMode]);

  const handleSave = async (newHotel: Hotel) => {
    try {
      const apiHotel = mapHotelFromVMToApi(newHotel);
      console.log({ apiHotel });
      const response = await api.saveHotel(apiHotel);
      if (response) {
        setHotel(mapHotelFromApiToVM(response));
      }
      showMessage('Hotel guardado correctamente', 'success');
    } catch {
      showMessage('No se ha podido guardar el hotel', 'error');
    }
  };

  return (
    <HotelComponent className={className} hotel={hotel} onSave={handleSave} />
  );
};
