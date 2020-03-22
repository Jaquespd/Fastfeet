import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function HeaderList({ children, title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Content>{children}</Content>
    </Container>
  );
}

// HeaderList.PropTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.arrayOf(PropTypes.element),
// };

HeaderList.defaultProps = {
  children: null,
};
