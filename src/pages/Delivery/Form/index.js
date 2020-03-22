import React, { useState, useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import api from '../../../services/api';
import Select from '../../../components/Select';

import HeaderList from '../../../components/HeaderList';
import SearchInput from '../../../components/SearchInput';
import SimpleInput from '../../../components/SimpleInput';

import { Container, Content } from './styles';

export default function Forms() {
  const [recipientOptions, setRecipientOptions] = useState([]);
  const [deliverymanOptions, setDeliverymanOptions] = useState([]);

  const formRef = useRef(null);

  async function loadRecipientOptions() {
    const response = await api.get('/recipients', {});

    const data = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    setRecipientOptions(data);
  }

  async function loadDeliverymanOptions() {
    const response = await api.get('/deliverymans', {});

    const data = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    setDeliverymanOptions(data);
  }

  useEffect(() => {
    loadRecipientOptions();
    loadDeliverymanOptions();
  }, []);

  function handleSubmit(data) {
    const allData = formRef.current.getData();
    console.log(allData);
  }

  const customStylesSelectInput = {
    control: provided => ({
      ...provided,
      height: 45,
      width: 240,
    }),
  };

  return (
    <Container>
      <Content>
        <HeaderList title="Formulario">
          <SearchInput placeholder="Pesquisa encomenda" />
        </HeaderList>
        <div>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Select
              type="text"
              label="Endereço"
              name="recipient_id"
              placeholder="Escolha o endereço"
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              defaultOptions={recipientOptions}
              styles={customStylesSelectInput}
            />
            <Select
              type="text"
              label="Entregador"
              name="delivery_id"
              placeholder="Entregadores"
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              defaultOptions={deliverymanOptions}
              styles={customStylesSelectInput}
            />
            <SimpleInput
              label="Nome do produto"
              name="product"
              type="text"
              placeholder="Nome do produto"
              onKeyPress={e =>
                e.key === 'Enter' ? formRef.current.submitForm() : null
              }
            />
            <button type="submit">Sign in</button>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
