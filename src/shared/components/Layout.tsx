import { Outlet } from 'react-router-dom';
import { Cabecalho } from './Cabecalho';

/** Moldura comum a todas as abas: cabeçalho fixo no topo e o conteúdo da rota abaixo. */
export function Layout() {
  return (
    <>
      <a href="#conteudo" className="pular-para-conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo" className="pagina">
        <Outlet />
      </main>
    </>
  );
}
