import React from 'react';
import { TableContainer } from 'common/components';
import { Hotel } from './hotel-list.vm';
import { HotelRowComponent } from './components';

interface Props {
  hotelList: Hotel[];
  onCreate: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  className?: string;
}

export const HotelListComponent: React.FunctionComponent<Props> = (props) => {
  const { className, hotelList, onCreate, onEdit, onDelete } = props;
  return (
    <TableContainer
      className={className}
      columns={[
        'Titulo',
        'Autor',
        'Fecha Publicación',
        { label: 'Comandos', align: 'center' },
      ]}
      rows={hotelList}
      rowRenderer={HotelRowComponent}
      labels={{
        createButton: 'Añadir libro',
        deleteConfirmationDialog: {
          title: 'Borrar libro',
          content: ({ itemName }) => (
            <p>
              ¿Está seguro de borrar <strong>{itemName}</strong>?
            </p>
          ),
          closeButton: 'Cancelar',
          acceptButton: 'Aceptar',
        },
      }}
      onCreate={onCreate}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};
