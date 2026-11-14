import { Link } from 'react-router-dom';

export function NaoEncontradaPage() {
  return (
    <div className="pagina__titulo">
      <p className="rotulo">Erro 404</p>
      <h1>Página não encontrada</h1>
      <p className="texto-secundario">
        Esse endereço não existe no MoneyDrops. <Link to="/">Voltar para o início</Link>
      </p>
    </div>
  );
}
