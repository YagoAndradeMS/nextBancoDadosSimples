import { Usuario } from '@prisma/client';

const usuarios: Usuario[] = [
  {
    id: '1',
    email: 'ana@empresa.com.br',
    nome: 'Ana Carolina',
    senha: '123456',
  },
  {
    id: '2',
    email: 'pedro@empresa.com.br',
    nome: 'Pedro Richard',
    senha: '123456',
  },
  {
    id: '3',
    email: 'Guilerme@empresa.com.br',
    nome: 'Guilerme Briggs',
    senha: '123456',
  },
  {
    id: '4',
    email: 'Augusto@empresa.com.br',
    nome: 'Augusto Perera',
    senha: '123456',
  },
  {
    id: '5',
    email: 'amanda@empresa.com.br',
    nome: 'Amanda Souza',
    senha: '123456',
  },
  {
    id: '6',
    email: 'rebecca@empresa.com.br',
    nome: 'Rebecca Silva',
    senha: '123456',
  },
];

export default usuarios;
