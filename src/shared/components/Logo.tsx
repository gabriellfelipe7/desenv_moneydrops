/** Logo do MoneyDrops: gota com gráfico + nome. As cores seguem o tema. */
export function Logo() {
  return (
    <span className="logo">
      <svg width="30" height="30" viewBox="0 0 100 100" aria-hidden="true">
        <path
          d="M50 4 C50 4 16 44 16 64 A34 34 0 0 0 84 64 C84 44 50 4 50 4 Z"
          fill="var(--md-green)"
        />
        <rect x="31" y="66" width="10" height="16" rx="3" fill="var(--md-on-green)" />
        <rect x="45" y="56" width="10" height="26" rx="3" fill="var(--md-on-green)" />
        <rect x="59" y="44" width="10" height="38" rx="3" fill="var(--md-on-green)" />
      </svg>
      <span className="logo__nome">
        Money<span className="logo__drops">Drops</span>
      </span>
    </span>
  );
}
