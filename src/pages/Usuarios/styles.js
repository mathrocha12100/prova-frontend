import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animacaoAparecer = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

const animacaoAparecerCard = keyframes`
  from {
    transform: scale(0.9);
  } to {
    transform: scale(1);
  }
`;

export const Conteudo = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 30px 30px;
  background: #fff;
  margin-top: 30px;
  padding: 30px;
  animation: ${animacaoAparecer} 700ms;

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

      main {
        display: flex;
        align-items: center;

        button {
          max-height: 44px;
          height: 44px;
          padding: 0 40px;
          color: #fff;
          font-weight: bold;
          border-radius: 2px;
          border: 0;
          background: #ff312e;
          font-size: 16px;
        }
      }

      strong {
        display: flex;
        align-items: center;
        color: #666;
        font-size: 18px;
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
        strong {
          margin-bottom: 10px;

          button {
            background: none;
            border: 0;
            padding: 3px;
            border-radius: 6px;
            margin-left: 6px;
            transition: background 0.4s;

            &:hover {
              background: #e7e7e7;
            }
          }
        }

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

        svg.buscar {
          position: relative;
          right: 34px;
          top: 6px;
          cursor: pointer;
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
    }
  }

  hr {
    background: #eee;
    height: 1px;
    border: 0px;
    margin: 20px 0;
  }
`;

export const ListarUsuarios = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 30px;

  @media (max-width: 925px) {
    grid-template-columns: minmax(0, 1fr);
    grid-gap: 11px;
  }
`;

export const Usuario = styled.div`
  animation: ${animacaoAparecerCard} 700ms;
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

    aside {
      span {
        font-size: 12px;
      }
    }
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
