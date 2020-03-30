import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { format as formatarCpf } from 'gerador-validador-cpf';
import {
  MdSearch,
  MdRefresh,
  MdArrowBack,
  MdArrowForward,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { Container, Conteudo, ListarClientes, Cliente, Rodape } from './styles';
import { pegarInformacoesDoCliente } from '../../store/modules/cliente/actions';

export default function Clientes() {
  const [pagina, setPagina] = useState(1);
  const [cpf, setCpf] = useState('');
  const [clientes, setClientes] = useState([]);
  const [buscouCliente, setBuscouCliente] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function carregarClientes() {
      const response = await api.get('clientes', {
        params: { page: pagina },
      });

      setClientes([...response.data]);
    }
    carregarClientes();
  }, [pagina]);

  async function buscarCliente() {
    if (!cpf) {
      return;
    }
    const cpfFormatado = formatarCpf(cpf);
    try {
      const buscarUmCliente = await api.get('clientes/buscarUm', {
        params: { cpf: cpfFormatado },
      });
      setClientes(buscarUmCliente.data.cliente);
      setBuscouCliente(true);
    } catch (error) {
      toast.error('Usuario não existe!');
    }
  }

  async function refresh() {
    try {
      const response = await api.get('clientes', {
        params: { page: 1 },
      });
      setClientes([...response.data]);
      setCpf('');
      setPagina(1);
      setBuscouCliente(false);
    } catch (error) {
      toast.error('Ocorreu um erro, verifique sua conexão com a internet');
    }
  }

  function acrescentarUmaPagina() {
    if (clientes.length === 0) {
      toast.error('Não existem mais clientes cadastrados!');
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
            <strong>
              BUSCAR CLIENTE{' '}
              <button type="button" onClick={refresh}>
                <MdRefresh size={28} color="#ff312e" />
              </button>
            </strong>
            <Link to="/criarcliente" className="criarCliente">
              CRIAR CLIENTE
            </Link>
            <div>
              <input
                type="text"
                placeholder="Digite o CPF do cliente"
                value={cpf}
                onChange={(texto) => setCpf(texto.target.value)}
                maxLength="14"
              />
              <MdSearch size={24} color="#333" onClick={buscarCliente} />
            </div>

            <button type="button" onClick={buscarCliente}>
              BUSCAR
            </button>
          </aside>
          <Link to="/dashboard">VOLTAR A DASHBOARD</Link>
        </header>
        <hr />

        <ListarClientes>
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <Link
                key={cliente.id}
                to="/atualizarcliente"
                onClick={() =>
                  dispatch(
                    pegarInformacoesDoCliente(
                      cliente.nome,
                      cliente.cpf,
                      cliente.endereco,
                      cliente.telefone,
                      cliente.id,
                      cliente.avatar ? cliente.avatar : null
                    )
                  )
                }
              >
                <Cliente>
                  <img
                    src={
                      cliente.avatar
                        ? cliente.avatar.url
                        : `https://api.adorable.io/avatars/112/${cliente.nome}.png`
                    }
                    alt={cliente.nome}
                  />
                  <aside>
                    <span>Nome: {cliente.nome}</span>
                    <hr />
                    <span>CPF: {cliente.cpf}</span>
                    <hr />

                    <span>Endereço: {cliente.endereco}</span>
                    <hr />

                    <span>Tel: {cliente.telefone}</span>
                  </aside>
                </Cliente>
              </Link>
            ))
          ) : buscouCliente ? (
            <Link
              to="/atualizarcliente"
              key={clientes.id}
              onClick={() =>
                dispatch(
                  pegarInformacoesDoCliente(
                    clientes.nome,
                    clientes.cpf,
                    clientes.endereco,
                    clientes.telefone,
                    clientes.id,
                    clientes.avatar ? clientes.avatar : null
                  )
                )
              }
            >
              <Cliente>
                <img
                  src={
                    clientes.avatar
                      ? clientes.avatar.url
                      : `https://api.adorable.io/avatars/112/${clientes.nome}.png`
                  }
                  alt={clientes.nome}
                />
                <aside>
                  <span>{clientes.nome}</span>
                  <hr />
                  <span>{clientes.cpf}</span>
                  <hr />

                  <span>{clientes.endereco}</span>
                  <hr />

                  <span>{clientes.telefone}</span>
                </aside>
              </Cliente>
            </Link>
          ) : (
            <>
              <h1>Não existem mais clientes cadastrados</h1>
            </>
          )}
          <hr />
        </ListarClientes>
        <Rodape>
          <button
            type="button"
            onClick={diminuirUmaPagina}
            disabled={buscouCliente}
          >
            {' '}
            <MdArrowBack size={22} color="#fff" />
            <strong>PAGINA ANTERIOR</strong>
          </button>
          <button
            type="button"
            onClick={acrescentarUmaPagina}
            disabled={buscouCliente}
          >
            {' '}
            <strong>PROXIMA PAGINA</strong>{' '}
            <MdArrowForward size={22} color="#fff" />
          </button>
        </Rodape>
      </Conteudo>
    </Container>
  );
}
