import React from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useSnackbarContext } from 'common/components';
import * as api from './api';
import { HotelListComponent } from './hotel-list.component';
import { Hotel } from './hotel-list.vm';
import { linkRoutes } from 'core/router';
import { mapHotelListFromApiToVM } from './hotel-list.mappers';

interface Props {
  className?: string;
}

export const HotelListContainer: React.FunctionComponent<Props> = (props) => {
  const { className } = props;
  const [hotelList, setHotelList] = React.useState<Hotel[]>([]);
  const { showMessage } = useSnackbarContext();
  const history = useHistory();

  const handleError = (error) => {
    const { response } = error as AxiosError;
    if (response.status === 403 || response.status === 401) {
      history.push(linkRoutes.root);
      showMessage('Introduzca credenciales apropiados', 'error');
    }
  };

  const handleLoad = async () => {
    try {
      const apiHotelList = await api.getHotelList();
      setHotelList(mapHotelListFromApiToVM(apiHotelList));
    } catch (error) {
      handleError(error);
    }
  };
  React.useEffect(() => {
    handleLoad();
  }, []);

  const handleCreate = () => {
    history.push(linkRoutes.createHotel);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editHotel({ id }));
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteHotel(id);
      await handleLoad();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <HotelListComponent
      className={className}
      hotelList={hotelList}
      onCreate={handleCreate}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
