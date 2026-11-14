import { PaginaEmConstrucao } from '../../shared/components/PaginaEmConstrucao';

export function PlanejadorPage() {
  return (
    <PaginaEmConstrucao
      secao="Planejador do mês"
      titulo="Seus gastos do mês"
      descricao="Registre e acompanhe os gastos do mês atual."
      itens={[
        'Cards de resumo: renda, total gasto, saldo e investido',
        'Gráficos de gastos por categoria e por dia',
        'Planilha de lançamentos, com busca e ordenação',
        'Formulário para adicionar e editar gastos',
      ]}
    />
  );
}
