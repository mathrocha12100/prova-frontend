import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Conteudo } from './styles';

export default function LayoutAutenticacao({ children }) {
  return (
    <Wrapper>
      <Conteudo>{children}</Conteudo>
    </Wrapper>
  );
}

LayoutAutenticacao.propTypes = {
  children: PropTypes.element.isRequired,
};
