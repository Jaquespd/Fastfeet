import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import DeliveryStatus from './DeliveryStatus';
import MoreMenu from './MoreMenu';
import NamePhoto from './NamePhoto';
import DeliveryModal from './Modal/DeliveryModal';

import { statusColors } from '../../../styles/colors';

export default function DeliveryItem({ delivery }) {
  const { recipient, deliveryman } = delivery;

  return (
    <Container>
      <small>#{delivery.id}</small>
      <small>{recipient.name}</small>
      <small>
        <div>
          <NamePhoto name={deliveryman.name} /> {deliveryman.name}
        </div>
      </small>
      <small>{recipient.cidade}</small>
      <small>{recipient.estado}</small>
      <small>
        <DeliveryStatus
          status={delivery.status}
          color={statusColors[delivery.status].color}
          background={statusColors[delivery.status].background}
        />
      </small>
      <small>
        <MoreMenu {...DeliveryModal} />
      </small>
    </Container>
  );
}

DeliveryItem.propTypes = {
  // updateDeliveries: PropTypes.func.isRequired,
  delivery: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      cidade: PropTypes.string,
      estado: PropTypes.string,
    }),
    deliveryman: PropTypes.shape({
      name: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};
