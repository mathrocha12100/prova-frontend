import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';

export default function LayoutPadrao({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

LayoutPadrao.propTypes = {
  children: PropTypes.element.isRequired,
};
