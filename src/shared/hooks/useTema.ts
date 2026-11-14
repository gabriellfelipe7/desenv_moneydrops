import { useCallback, useEffect, useState } from 'react';

export type Tema = 'claro' | 'escuro';

/** A mesma chave é lida pelo script do index.html, antes de o React carregar. */
const CHAVE = 'moneydrops:tema';

function temaInicial(): Tema {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo === 'claro' || salvo === 'escuro') return salvo;
  } catch {
    // sem acesso ao localStorage: cai na preferência do sistema
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
}

/** Tema atual do app. A escolha fica salva no navegador. */
export function useTema() {
  const [tema, setTema] = useState<Tema>(temaInicial);

  useEffect(() => {
    document.documentElement.dataset.theme = tema === 'escuro' ? 'dark' : 'light';
  }, [tema]);

  const alternarTema = useCallback(() => {
    setTema((atual) => {
      const novo: Tema = atual === 'escuro' ? 'claro' : 'escuro';
      try {
        localStorage.setItem(CHAVE, novo);
      } catch {
        // sem acesso ao localStorage: o tema vale só para esta visita
      }
      return novo;
    });
  }, []);

  return { tema, alternarTema };
}
