import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100px;
  background: #fff;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Conteudo = styled.div`
  max-width: 1300px;
  margin: 0 35px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  aside {
    display: flex;

    img {
      height: 80px;
      width: 80px;
      background: #c4c4c4;
      border-radius: 2px;
      margin-right: 20px;
    }

    nav {
      display: flex;
      flex-direction: column;
      h2 {
        font-weight: normal;
        margin-bottom: 5px;
        color: #333;
      }

      span {
        color: #888;
      }

      a.perfil {
        color: #999;
        font-weight: normal;
      }

      a {
        margin-top: 9px;
        font-weight: bold;
        color: #ff312e;
      }
    }
  }

  button {
    padding: 10px 30px;
    font-weight: bold;
    color: #fff;
    border-radius: 2px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ff312e;
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.15, '#ff312e')};
    }

    svg {
      margin-left: 15px;
    }
  }

  @media (max-width: 460px) {
    margin: 0 10px;
    aside {
      img {
        height: 50px;
        width: 50px;
      }

      nav {
        h2 {
          font-size: 16px;
        }

        span {
          font-size: 12px;
        }

        a {
          font-size: 12px;
        }
      }
    }

    button {
      padding: 6px 10px;
      font-size: 13px;

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

export const Informacoes = styled.div``;
