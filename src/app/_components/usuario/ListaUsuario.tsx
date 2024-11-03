import usuarios from '@/app/_data/constants/usuarios';
import LinhaUsuario from './LinhaUsuario';
import { Usuario } from '@prisma/client';

export default function ListaUsuario() {
  return (
    <div className='flex flex-col gap-4'>
      {usuarios.map((usuario: Usuario) => {
        return <LinhaUsuario key={usuario.id} usuario={usuario} />;
      })}
    </div>
  );
}
