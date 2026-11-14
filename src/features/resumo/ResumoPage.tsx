import { PaginaEmConstrucao } from '../../shared/components/PaginaEmConstrucao';

export function ResumoPage() {
  return (
    <PaginaEmConstrucao
      secao="Resumo e estatísticas"
      titulo="Sua vida financeira, mês a mês"
      descricao="Um painel que consolida todos os meses registrados no Planejador."
      itens={[
        'Filtro de período',
        'Renda x gastos ao longo dos meses',
        'Média mensal por categoria e patrimônio investido',
        'Destaques do período e histórico mensal',
      ]}
    />
  );
}
