import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const animacaoAparecer = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  margin: 34px;
  max-width: 1300px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

  @media (max-width: 1000px) {
    grid-gap: 25px;
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const VizualizarClientes = styled(Link).attrs({
  to: '/clientes',
})`
  animation-name: ${animacaoAparecer};
  animation-duration: 700ms;

  background: #fff;
  border-radius: 2px;
  font-size: 22px;
  color: #666;
  max-height: 600px;

  display: flex;
  flex-direction: column;
  padding: 25px;
  h1 {
    margin: 34px 0 0 34px;
  }
  @media (max-width: 500px) {
    max-height: 400px;
    font-size: 17px;

    img {
      max-height: 300px;
    }

    h1 {
      margin: 12px 0 0 12px;
    }
  }
`;

export const VizualizarUsuarios = styled(Link).attrs({
  to: '/usuarios',
})`
  animation-name: ${animacaoAparecer};
  animation-duration: 700ms;
  background: #fff;
  border-radius: 2px;
  font-size: 22px;
  color: #666;
  display: flex;
  flex-direction: column;
  max-height: 600px;
  img {
    max-height: 400px;
  }

  display: flex;
  flex-direction: column;
  padding: 25px;
  h1 {
    margin: 34px 34px;
  }

  @media (max-width: 500px) {
    max-height: 400px;
    font-size: 17px;

    img {
      max-height: 270px;
    }

    h1 {
      margin: 12px 0 0 12px;
    }
  }
`;

export const CriarClientes = styled(Link).attrs({
  to: '/criarcliente',
})`
  animation-name: ${animacaoAparecer};
  animation-duration: 700ms;
  border-radius: 2px;
  background: #fff;
  grid-column: 1 / 3;

  @media (max-width: 1000px) {
    grid-column: 1 / 1;

    div {
      flex-direction: column;
      img {
        margin: 25px 0;
        max-width: 700px;
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    color: #666;

    img {
      width: 650px;
    }

    h1 {
      margin-left: 50px;

      strong {
        display: block;
        text-indent: 30px;
      }
    }

    @media (max-width: 500px) {
      font-size: 17px;
    }

    @media (max-width: 760px) {
      img {
        max-width: 400px;
      }
    }

    @media (max-width: 460px) {
      img {
        font-size: 15px;
        max-width: 240px;
      }
    }
  }
`;
