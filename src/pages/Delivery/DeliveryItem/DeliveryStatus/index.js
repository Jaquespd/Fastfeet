import React from 'react';
import PropTypes from 'prop-types';

import { MdFiberManualRecord } from 'react-icons/md';

import { Container, Content } from './styles';

export default function DeliveryStatus({ status, color, background }) {
  return (
    <Container>
      <Content color={color} background={background}>
        <MdFiberManualRecord size={15} color={color} />
        <strong>{status}</strong>
      </Content>
    </Container>
  );
}

DeliveryStatus.propTypes = {
  status: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
