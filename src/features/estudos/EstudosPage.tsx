import { PaginaEmConstrucao } from '../../shared/components/PaginaEmConstrucao';

export function EstudosPage() {
  return (
    <PaginaEmConstrucao
      secao="Estudos"
      titulo="Conceitos de finanças, sem complicação"
      descricao="Um glossário com definição e exemplo prático de cada conceito."
      itens={[
        'Busca e filtro por categoria',
        'Conceitos em botões: CDB, LCI, LCA, CDI, Selic, FGC e outros',
        'Definição em linguagem simples e exemplo com números',
        'Ficha do investimento: risco, liquidez, imposto e garantia',
      ]}
    />
  );
}
