import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import { Button } from './styles';

export default function IconButton(action) {
  return (
    <Button type="button" onClick={action}>
      <MdAdd color="#fff" size="16" />
      CADASTRAR
    </Button>
  );
}

// IconButton.PropTypes = {
//   action: PropTypes.func.isRequired,
// };
