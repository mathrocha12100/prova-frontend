import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;
    transition: opacity 1s;
    &:hover {
      opacity: 0.6;
    }
    img {
      height: 112px;
      width: 122px;
      border-radius: 2px;
      border: 3px solid #c4c4c4;
      background: #c4c4c4;
    }
    input {
      display: none;
    }
  }
`;
