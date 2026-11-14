import { PaginaEmConstrucao } from '../../shared/components/PaginaEmConstrucao';

export function InicioPage() {
  return (
    <PaginaEmConstrucao
      secao="Início"
      titulo="O que movimentou o mercado hoje"
      descricao="Notícias, cotações e conteúdo para acompanhar o mercado financeiro."
      itens={[
        'Cotações do dia: Ibovespa, dólar, IFIX e bitcoin',
        'Notícia em destaque e lista de notícias nacionais e internacionais',
        'Dica do dia e artigos de finanças pessoais',
        'Resumo do seu mês, com atalho para o Planejador',
      ]}
    />
  );
}
