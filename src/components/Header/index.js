import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles';
import { deslogar as sair } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const { nome, avatar } = useSelector((state) => state.usuario.usuario);

  function deslogar() {
    dispatch(sair());
  }
  return (
    <Container>
      <Conteudo>
        <aside>
          <img
            src={
              avatar
                ? avatar.url
                : 'https://api.adorable.io/avatars/112/abott@adorable.png'
            }
            alt=""
          />
          <nav>
            <h2>{nome}</h2>
            <Link to="/perfil" className="perfil">
              Meu perfil
            </Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </aside>
        <button type="button" onClick={deslogar}>
          DESLOGAR <MdExitToApp color="#FFF" size={32} />
        </button>
      </Conteudo>
    </Container>
  );
}
