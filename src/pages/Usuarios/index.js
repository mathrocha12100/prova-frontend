import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {
  MdSearch,
  MdRefresh,
  MdArrowBack,
  MdArrowForward,
} from 'react-icons/md';
import api from '../../services/api';
import { Container, Conteudo, ListarUsuarios, Usuario, Rodape } from './styles';

export default function Usuarios() {
  const [nome, setNome] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [buscouUsuario, setBuscouUsuario] = useState(false);

  useEffect(() => {
    async function carregarUsuarios() {
      const response = await api.get('usuarios', {
        params: { page: pagina },
      });
      setUsuarios([...response.data]);
    }
    carregarUsuarios();
  }, [pagina]);

  async function buscarUsuario() {
    if (!nome) {
      return;
    }
    try {
      const buscarUmUsuario = await api.get('usuarios/buscarUm', {
        params: { nome },
      });
      setUsuarios(buscarUmUsuario.data);
      setBuscouUsuario(true);
    } catch (error) {
      toast.error('Usuario não existe!');
    }
  }

  async function refresh() {
    if (buscouUsuario) {
      try {
        const response = await api.get('usuarios', {
          params: { page: 1 },
        });
        setUsuarios([...response.data]);
        setNome('');
        setPagina(1);
        setBuscouUsuario(false);
      } catch (error) {
        toast.error('Ocorreu um erro, verifique sua conexão com a internet');
      }
    }
  }

  function acrescentarUmaPagina() {
    if (usuarios.length === 0) {
      toast.error('Não existem mais usuarios cadastrados!');
    } else {
      setPagina(pagina + 1);
    }
  }

  function diminuirUmaPagina() {
    if (pagina > 1) {
      setPagina(pagina - 1);
    } else {
      toast.error('A pagina atual é a 1');
    }
  }

  return (
    <Container>
      <Conteudo>
        <header>
          <aside>
            <div>
              <strong>
                BUSCAR USUARIO
                <button type="button" onClick={refresh}>
                  <MdRefresh size={28} color="#ff312e" />
                </button>{' '}
              </strong>

              <input
                type="text"
                placeholder="Digite o nome do usuario"
                value={nome}
                onChange={(texto) => setNome(texto.target.value)}
                maxLength="14"
              />
              <MdSearch
                size={24}
                color="#333"
                className="buscar"
                onClick={buscarUsuario}
              />
            </div>
            <main>
              <button type="button" onClick={buscarUsuario}>
                BUSCAR
              </button>
            </main>
          </aside>
          <Link to="/dashboard">VOLTAR A DASHBOARD</Link>
        </header>
        <hr />

        <ListarUsuarios>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <Usuario key={usuario.id}>
                <img
                  src={`https://api.adorable.io/avatars/112/${usuario.nome}.png`}
                  alt={usuario.nome}
                />
                <aside>
                  <span>Nome: {usuario.nome}</span>
                  <hr />
                  <span>E-Mail: {usuario.email}</span>
                  <hr />

                  <span>Tel: {usuario.telefone}</span>
                </aside>
              </Usuario>
            ))
          ) : buscouUsuario ? (
            <Usuario key={usuarios.id}>
              <img
                src={`https://api.adorable.io/avatars/112/${usuarios.nome}.png`}
                alt={usuarios.nome}
              />
              <aside>
                <span>Nome: {usuarios.nome}</span>
                <hr />
                <span>E-Mail: {usuarios.email}</span>
                <hr />

                <span>Tel: {usuarios.telefone}</span>
              </aside>
            </Usuario>
          ) : (
            <>
              <h1>Não existem mais usuarios cadastrados</h1>
            </>
          )}
        </ListarUsuarios>
        <Rodape>
          <button
            type="button"
            onClick={diminuirUmaPagina}
            disabled={buscouUsuario}
          >
            {' '}
            <MdArrowBack size={22} color="#fff" />
            PAGINA ANTERIOR
          </button>
          <button
            type="button"
            onClick={acrescentarUmaPagina}
            disabled={buscouUsuario}
          >
            {' '}
            PROXIMA PAGINA <MdArrowForward size={22} color="#fff" />
          </button>
        </Rodape>
      </Conteudo>
    </Container>
  );
}
