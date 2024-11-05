import Pagina from './_components/template/Pagina';

export default function Home() {
  return (
    <Pagina>
      <div className='flex flex-col items-center text-justify gap-10 mx-auto my-10 w-auto h-a p-6 bg-black text-white rounded-xl '>
        <h1 className=' text-2xl font-black '>CRUD em NextJs</h1>
        <p>
          Bem-vindo à minha simples aplicação de gestão de dados! Essa é uma
          plataforma simples e intuitiva, desenvolvida com o intuito de por em
          pratica minhas habilidades com Next.js e Prisma.Criei um simples
          sistema CRUD (Create, Read, Update, Delete) conectado a um banco de
          dados SQL, o que garante rapidez e eficiência no armazenamento e
          atualização dos dados. Com esta aplicação, você pode: Adicionar novos
          registros de maneira rápida e prática. Visualizar e acessar detalhes
          de todos os registros salvos. Editar informações para garantir que
          estejam sempre atualizadas. Excluir dados que não são mais
          necessários, mantendo a base sempre organizada.
        </p>
      </div>
    </Pagina>
  );
}
