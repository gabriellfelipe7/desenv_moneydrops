# Identidade visual · MoneyDrops

> Seu dinheiro, gota a gota. Pequenos valores que, organizados, somam.

Interface **clean**: muito espaço em branco, poucas cores, verde só onde importa.

---

## Logo

| Arquivo | Uso |
|---|---|
| `src/assets/brand/logo-horizontal.svg` | Header e materiais em fundo claro |
| `src/assets/brand/logo-horizontal-dark.svg` | Header e materiais em fundo escuro |
| `src/assets/brand/logo-mark.svg` | Símbolo isolado (gota com gráfico de barras) em fundo claro |
| `src/assets/brand/logo-mark-dark.svg` | Símbolo isolado em fundo escuro |
| `src/assets/brand/app-icon.svg` | Ícone do app (fonte para os PNGs) |
| `src/assets/brand/concepts/` | Conceitos A (gota com cifrão) e C (gotas que somam), guardados como referência |

Os textos dos SVGs estão convertidos em curvas, então o logo aparece igual mesmo sem a fonte Inter instalada.

**Regras de uso**

- Não distorcer, girar nem trocar as cores do logo.
- Manter uma área livre ao redor do logo equivalente a metade da altura da gota.
- Tamanho mínimo: símbolo com 16 px; logo horizontal com 96 px de largura.
- Em fundos verdes, usar o símbolo branco do `app-icon.svg`.

## Cores

### Modo claro (padrão)

| Token | Hex | Uso |
|---|---|---|
| `--md-bg` | `#F7F6F2` | Fundo off-white |
| `--md-surface` | `#FFFFFF` | Cartões, tabelas, header |
| `--md-border` | `#E4E2DB` | Divisórias e bordas |
| `--md-text` | `#17181A` | Texto principal |
| `--md-text-secondary` | `#5F6368` | Rótulos e texto de apoio |
| `--md-green` | `#0E7A44` | Verde Drop: marca, botões, saldo positivo |
| `--md-green-soft` | `#E3F2E9` | Fundo de tags verdes |
| `--md-expense` | `#C2410C` | Gastos e pendências |

### Modo escuro

| Token | Hex | Uso |
|---|---|---|
| `--md-bg` | `#1E2023` | Fundo cinza |
| `--md-surface` | `#272A2E` | Cartões, tabelas, header |
| `--md-border` | `#363A40` | Divisórias e bordas |
| `--md-text` | `#ECEDEE` | Texto principal |
| `--md-text-secondary` | `#A3A8AE` | Rótulos e texto de apoio |
| `--md-green` | `#3DD68C` | Verde Drop (mais vivo para contrastar com o cinza) |
| `--md-green-soft` | `#1E3A2B` | Fundo de tags verdes |
| `--md-expense` | `#F28B5B` | Gastos e pendências |

Todas as combinações de texto e fundo atendem ao contraste mínimo de 4,5:1 (WCAG AA).

**Por que gastos em laranja e não vermelho?** Vermelho e verde lado a lado se confundem para quem tem daltonismo. O laranja-tijolo continua indicando "atenção" e se diferencia do verde também pela luminosidade.

### Gráficos

Categorias usam uma escala de verdes mais um cinza neutro (`--md-chart-1` a `--md-chart-5` e `--md-chart-neutral`). Até 6 categorias por gráfico; acima disso, agrupar em "Outros".

## Tipografia

**Inter** (Google Fonts, gratuita), em todos os textos.

| Estilo | Tamanho | Peso |
|---|---|---|
| Display | 36 px | 700 · tracking −0,02em |
| Título de seção | 24 px | 600 |
| Título de cartão | 17 px | 600 |
| Corpo | 16 px | 400 |
| Tabela | 14 px | 400–500 |
| Legenda / rótulo | 13 px | 500 |
| Número de KPI | 28 px | 700 · tracking −0,02em |

Valores em dinheiro sempre com `font-variant-numeric: tabular-nums`, para que os algarismos fiquem alinhados nas colunas.

## Componentes

- **Botão primário:** fundo verde, texto `--md-on-green`, raio de 10 px, altura mínima de 44 px.
- **Botão secundário:** fundo de superfície, borda `--md-border-strong`.
- **Chips de categoria:** pílula com fundo `--md-surface-muted`; a categoria Investimento usa `--md-green-soft` e texto verde.
- **Cartões:** fundo de superfície, borda de 1 px, raio de 14 px, sem sombra pesada.
- **Ícones:** traço (stroke) de 2 px, cantos arredondados, cor do texto. Sugestão: [Lucide](https://lucide.dev).

## Tema claro e escuro

O tema segue a preferência do sistema. Para forçar um tema, defina o atributo no `<html>`:

```html
<html data-theme="dark">
```

## Favicons

Coloque no `<head>` do `index.html`:

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#F7F6F2" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1E2023" media="(prefers-color-scheme: dark)">
```
