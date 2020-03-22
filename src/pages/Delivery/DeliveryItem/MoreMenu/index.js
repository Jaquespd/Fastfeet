import React from 'react';

import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';
import Popup from 'reactjs-popup';

import Modal from '../Modal';

import { PopUpButton, MoreConainer } from './styles';

export default function MoreMenu({ children, ...rest }) {
  return (
    <Popup
      trigger={
        <PopUpButton type="button">
          <MdMoreHoriz color="#C6C6C6" size={25} />
        </PopUpButton>
      }
      position="bottom center"
      contentStyle={{
        width: '150px',
        borderRadius: '4px',
      }}
      {...rest}
    >
      <MoreConainer>
        <div>
          <Modal {...children} />
        </div>
        <div>
          <button type="button">
            <MdEdit color="#4D85EE" size={15} />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button">
            <MdDeleteForever color="#DE3B3B" size={15} />
            <span>Excluir</span>
          </button>
        </div>
      </MoreConainer>
    </Popup>
  );
}
