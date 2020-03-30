import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

const animacaoAparecer = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

const animacaoAumentarCardDoCliente = keyframes`
  from {
    transform: scale(1);
  } to {
    transform: scale(1.04);
  }
`;

const animacaoAparecerCardDoCliente = keyframes`
  from {
    transform: scale(0.9);
  } to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Conteudo = styled.div`
  animation: ${animacaoAparecer};
  animation-duration: 700ms;
  width: 100%;
  max-width: 1100px;
  margin: 30px 30px;
  background: #fff;
  margin-top: 30px;
  padding: 30px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 840px) {
      flex-direction: column;
      a {
        margin-top: 15px;
      }
    }

    @media (max-width: 630px) {
      div {
        svg {
          display: none;
        }
      }
    }

    @media (max-width: 530px) {
      div {
        input {
          max-width: 155px;
        }

        svg {
          display: none;
        }
      }
    }

    @media (max-width: 430px) {
      flex-direction: column;
    }

    aside {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      grid-gap: 10px 20px;

      @media (max-width: 430px) {
        grid-template-columns: minmax(0, 1fr);

        a.criarCliente {
          display: none;
        }

        button {
          padding: 10px;
        }
      }

      @media (max-width: 830px) {
        a {
          max-width: 170px;
        }

        button {
          max-width: 170px;
        }
      }

      strong {
        display: flex;
        align-items: center;
        color: #666;
        font-size: 18px;

        button {
          margin-left: 14px;
          background: none;
          border-radius: 6px;
          padding: 3px;
          transition: background 0.4s;

          &:hover {
            background: #e7e7e7;
          }
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
        max-height: 44px;
        height: 44px;
        border-radius: 2px;
        background: #ff312e;
        padding: 10px;
        font-size: 16px;
      }

      div {
        input {
          background: #c4c4c4;
          border: 0;
          border-radius: 2px;
          height: 44px;
          padding: 0 15px;
          color: #000;
          margin: 0 0 10px;
          &::placeholder {
            color: #888888;
          }
        }

        svg {
          cursor: pointer;
          position: relative;
          right: 34px;
          top: 6px;
        }
      }

      button {
        max-height: 44px;
        color: #fff;
        font-weight: bold;
        border-radius: 2px;
        border: 0;
        background: #ff312e;
        font-size: 16px;
        transition: background 0.4s;

        &:hover {
          background: ${darken(0.1, '#ff312e')};
        }
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #ff312e;
      height: 50px;
      max-height: 50px;
      padding: 0 14px;

      font-size: 16px;
      color: #fff;
      font-weight: bold;

      transition: background 0.4s;

      &:hover {
        background: ${darken(0.1, '#ff312e')};
      }
    }
  }

  hr {
    background: #eee;
    height: 1px;
    border: 0px;
    margin: 20px 0;
  }
`;

export const ListarClientes = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 30px;

  @media (max-width: 925px) {
    grid-template-columns: minmax(0, 1fr);
  }

  a {
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.1, '#ff312e')};
      animation: ${animacaoAumentarCardDoCliente} 700ms forwards;
    }
  }
`;

export const Cliente = styled.div`
  animation: ${animacaoAparecerCardDoCliente} 700ms;
  padding: 10px;
  background: #ff312e;
  opacity: 0.85;
  border-radius: 2px;
  display: flex;
  img {
    background: #c4c4c4;
    border-radius: 2px;
    max-width: 112px;
    max-height: 112px;
  }
  @media (max-width: 450px) {
    img {
      display: none;
    }
    padding: 16px;
  }
  aside {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 16px;

    hr {
      margin: 5px 0;
      height: 1px;
      background: #fff;
      border: 0;
      opacity: 0.6;
    }
  }
`;

export const Rodape = styled.footer`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    max-height: 44px;
    height: 44px;
    border-radius: 2px;
    background: #ff312e;
    padding: 10px;
    font-size: 16px;
    border: 0;

    &:disabled {
      cursor: default;
      background: ${lighten(0.2, '#ff312e')};
    }

    @media (max-width: 530px) {
      padding: 4px;
      font-size: 14px;
    }

    @media (max-width: 457px) {
      padding: 2px;
      font-size: 12px;
    }

    @media (max-width: 420px) {
      strong {
        display: none;
      }
      button {
        padding: 4px;
      }
    }

    svg {
      margin: 0 5px;
    }
  }
`;
