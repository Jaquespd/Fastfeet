import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import HeaderList from '../../components/HeaderList';
import IconButton from '../../components/IconButton';
import SearchInput from '../../components/SearchInput';
import DeliveryItem from './DeliveryItem';
import history from '../../services/history';

import { Container, Content, Grid } from './styles';

export default function Delivery() {
  const [deliverys, setDeliverys] = useState([]);

  function deliveryStatus(delivery) {
    if (delivery.canceled_at) {
      return 'CANCELADA';
    }
    if (delivery.end_date) {
      return 'ENTREGUE';
    }
    if (delivery.start_date) {
      return 'RETIRADA';
    }
    return 'PENDENTE';
  }

  function addStatus(data) {
    return data.map(delivery => ({
      ...delivery,

      status: deliveryStatus(delivery),
    }));
  }

  async function loadDeliverys(q) {
    const response = await api.get('/deliverys', {
      params: {
        page: 1,
        q: q || '',
      },
    });

    console.log('antes', response.data);
    const data = addStatus(response.data);

    console.log('depois', data);

    setDeliverys(data);
  }

  async function handleSearchDelivery(e) {
    const q = e.target.value;

    loadDeliverys(q);
  }

  useEffect(() => {
    loadDeliverys();
  }, []); //eslint-disable-line

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciamento de encomendas">
          <SearchInput
            onChange={handleSearchDelivery}
            placeholder="Pesquisa encomenda"
          />
          <IconButton action={() => history.push('/deliverys/form')} />
        </HeaderList>

        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Destinatário</strong>
            <strong>Entregador</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </section>
          {deliverys.map(delivery => (
            <DeliveryItem key={delivery.id} delivery={delivery} />
          ))}
        </Grid>
      </Content>
    </Container>
  );
}
