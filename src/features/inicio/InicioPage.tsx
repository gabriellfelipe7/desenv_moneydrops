import { PaginaEmConstrucao } from '../../shared/components/PaginaEmConstrucao';

export function InicioPage() {
  return (
    <PaginaEmConstrucao
      secao="Início"
      titulo="Leituras para cuidar melhor do seu dinheiro"
      descricao="Artigos e livros escolhidos a dedo, do básico ao avançado."
      itens={[
        'Dica do dia',
        'Leituras recomendadas, com filtro por tema',
        'Livros indicados, do básico ao avançado',
        'Resumo do seu mês, com atalho para o Planejador',
      ]}
    />
  );
}
