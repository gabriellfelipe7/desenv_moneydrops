import { Link, NavLink } from 'react-router-dom';
import { useTema } from '../hooks/useTema';
import { BotaoTema } from './BotaoTema';
import { Logo } from './Logo';

const ABAS = [
  { para: '/', rotulo: 'Início' },
  { para: '/estudos', rotulo: 'Estudos' },
  { para: '/planejador', rotulo: 'Planejador' },
  { para: '/resumo', rotulo: 'Resumo' },
];

export function Cabecalho() {
  const { tema, alternarTema } = useTema();

  return (
    <header className="cabecalho">
      <div className="cabecalho__conteudo">
        <Link to="/" className="cabecalho__logo" aria-label="MoneyDrops, página inicial">
          <Logo />
        </Link>

        <nav className="abas" aria-label="Abas principais">
          {ABAS.map((aba) => (
            <NavLink
              key={aba.para}
              to={aba.para}
              end={aba.para === '/'}
              className={({ isActive }) => (isActive ? 'aba aba--ativa' : 'aba')}
            >
              {aba.rotulo}
            </NavLink>
          ))}
        </nav>

        <BotaoTema tema={tema} onAlternar={alternarTema} />
      </div>
    </header>
  );
}
