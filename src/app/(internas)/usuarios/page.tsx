'use client';
import Pagina from '@/app/_components/template/Pagina';
import Titulo from '@/app/_components/template/Titulo';
import FormularioUsuario from '@/app/_components/usuario/FormularioUsuario';
import ListaUsuario from '@/app/_components/usuario/ListaUsuario';
import usuarios from '@/app/_data/constants/usuarios';
import { Usuario } from '@prisma/client';
import { IconUser } from '@tabler/icons-react';
import { useState } from 'react';

export default function Page() {
  const [usuario, setUsuario] = useState<Usuario>(usuarios[0]);

  function salvar() {
    // Salvar no banco dados
  }

  return (
    <Pagina className='flex flex-col gap-10'>
      <Titulo
        icone={IconUser}
        principal='Usuários'
        secundario='Cadastro de usuario'
      />
      {/* <ListaUsuario /> */}
      <FormularioUsuario
        usuario={usuario}
        onChange={setUsuario}
        cancelar={() => {}}
        salvar={() => {}}
      />
    </Pagina>
  );
}
