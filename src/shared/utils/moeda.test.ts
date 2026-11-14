import { describe, expect, it } from 'vitest';
import { formatarMoeda, reaisParaCentavos } from './moeda';

/** O Intl separa "R$" do número com um espaço não separável; troca por espaço comum. */
const semNbsp = (texto: string) => texto.replace(/ /g, ' ');

describe('formatarMoeda', () => {
  it('formata centavos como reais', () => {
    expect(semNbsp(formatarMoeda(5590))).toBe('R$ 55,90');
    expect(semNbsp(formatarMoeda(165000))).toBe('R$ 1.650,00');
    expect(semNbsp(formatarMoeda(0))).toBe('R$ 0,00');
  });

  it('formata valores negativos', () => {
    expect(semNbsp(formatarMoeda(-1050))).toBe('-R$ 10,50');
  });
});

describe('reaisParaCentavos', () => {
  it('lê valores no padrão brasileiro', () => {
    expect(reaisParaCentavos('55,90')).toBe(5590);
    expect(reaisParaCentavos('R$ 1.650,00')).toBe(165000);
    expect(reaisParaCentavos('100')).toBe(10000);
  });

  it('não sofre com arredondamento de ponto flutuante', () => {
    expect(reaisParaCentavos('0,29')).toBe(29);
    expect(reaisParaCentavos('1,15')).toBe(115);
  });

  it('devolve null para texto inválido', () => {
    expect(reaisParaCentavos('')).toBeNull();
    expect(reaisParaCentavos('abc')).toBeNull();
    expect(reaisParaCentavos('12,3,4')).toBeNull();
  });
});
