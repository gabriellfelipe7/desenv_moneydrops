/**
 * Dinheiro no MoneyDrops é sempre guardado em centavos inteiros (5590, não 55.90),
 * para evitar erros de arredondamento de ponto flutuante. A conversão para reais
 * acontece só na hora de exibir ou de ler o que o usuário digitou.
 */

const formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

/** 5590 → "R$ 55,90" */
export function formatarMoeda(centavos: number): string {
  return formatador.format(centavos / 100);
}

/**
 * Lê um valor digitado no padrão brasileiro e devolve centavos.
 * "55,90" → 5590 · "R$ 1.650,00" → 165000 · "abc" → null
 */
export function reaisParaCentavos(texto: string): number | null {
  const limpo = texto
    .replace(/R\$/i, '')
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(',', '.');
  if (limpo === '' || !/^-?\d+(\.\d+)?$/.test(limpo)) return null;
  return Math.round(Number(limpo) * 100);
}
