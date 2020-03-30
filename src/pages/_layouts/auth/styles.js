import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

const animacaoAparecerFormulario = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Conteudo = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: flex-start;
  margin: 0 30px;

  form {
    background: #fff;
    padding: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 2px;

    aside {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    strong {
      color: #666;
      font-size: 15px;
      align-self: flex-start;
      margin: 10px 0 15px;
      font-weight: bold;
    }

    div {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      grid-column-gap: 20px;
    }
    button {
      margin: 10px 0 0;
      height: 44px;
      background: #ff312e;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 2px;
      font-size: 18px;
      transition: background 0.3s;
      &:hover {
        background: ${darken(0.03, '#FF312E')};
      }

      svg {
        animation: ${rotate} 2s linear infinite;
      }
    }
    a {
      text-align: center;
      color: #ff312e;
      margin: 5px 0;
      font-size: 12px;
      font-weight: bold;
      opacity: 0.77;
      &:hover {
        opacity: 1;
      }
    }
  }

  form {
    animation: ${animacaoAparecerFormulario};
    animation-duration: 700ms;
  }
`;
