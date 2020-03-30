import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import api from '../../services/api';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [arquivo, setArquivo] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('arquivo', e.target.files[0]);

    try {
      const response = await api.post('arquivos', data);

      const { id, url } = response.data;

      setArquivo(id);
      setPreview(url);
    } catch (error) {
      toast.error('Imagem invalida');
    }
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || `https://api.adorable.io/avatars/92/123.png`}
          alt="Cliente"
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={arquivo}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
