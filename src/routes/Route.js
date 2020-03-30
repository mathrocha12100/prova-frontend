import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import LayoutAutenticacao from '../pages/_layouts/auth';
import LayoutPadrao from '../pages/_layouts/default';
import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  ehPrivado = false,
  ...rest
}) {
  const { logado } = store.getState().auth;

  const Layout = logado ? LayoutPadrao : LayoutAutenticacao;

  if (!logado && ehPrivado) {
    return <Redirect to="/" />;
  }

  if (logado && !ehPrivado) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  ehPrivado: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  ehPrivado: false,
};
