# Checklist de desenvolvimento · MoneyDrops

Acompanhamento do que já foi feito e do que vem a seguir. Marque cada item com `[x]` quando ele for entregue.

A ordem vai do que entrega valor mais cedo ao que depende de mais infraestrutura. A partir da Fase 6, ela pode mudar conforme o que os primeiros testes mostrarem.

## Fase 0: Fundação

- [x] README do projeto
- [x] Identidade visual: logo, cores, tipografia e `tokens.css`
- [x] Layouts das quatro abas, nos modos claro e escuro
- [x] README com as telas

## Fase 1: Esqueleto do projeto

- [x] Criar o projeto com Vite + React + TypeScript
- [x] Configurar ESLint, Prettier e Vitest
- [x] Ligar o `tokens.css` e a fonte Inter
- [x] Criar o layout base: cabeçalho com logo, menu das quatro abas e botão de tema
- [x] Configurar as rotas (`/`, `/estudos`, `/planejador`, `/resumo`) com páginas vazias
- [x] Fazer o tema claro/escuro funcionar e lembrar a escolha
- [ ] Rodar `npm install` na máquina, confirmar `dev`, `test`, `lint` e `build`, e commitar o `package-lock.json`
- [ ] Publicar na Vercel, para ter um link de teste desde o início

## Fase 2: Planejador do mês

- [ ] Definir os tipos `Gasto` e `Mes`, com valores em centavos
- [ ] Criar a camada de dados (`salvarGasto`, `listarGastos`…) sobre o `localStorage`
- [ ] Formulário de novo gasto, com validação
- [ ] Tabela de lançamentos: editar, excluir, ordenar, buscar
- [ ] Cards de resumo: renda, total gasto, saldo, investido
- [ ] Gráficos por categoria e por dia
- [ ] Testes dos cálculos (totais, saldo, percentuais)
- [ ] Navegação entre meses

## Fase 3: Resumo e estatísticas

- [ ] Consolidar os meses a partir dos dados do Planejador
- [ ] Filtro de período
- [ ] Gráfico de renda x gastos e média por categoria
- [ ] Patrimônio investido, destaques e histórico mensal

## Fase 4: Estudos

- [ ] Montar o `glossario.json` (os 12 conceitos do layout já servem de base)
- [ ] Grade de conceitos com busca e filtro por categoria
- [ ] Painel de definição, exemplo e ficha
- [ ] Ampliar o conteúdo e revisar os exemplos

## Fase 5: Início

- [ ] Escolher as APIs de notícias e cotações, conferindo os termos de uso comercial
- [ ] Criar uma função no servidor para buscar os dados, sem expor as chaves
- [ ] Faixa de cotações, destaque e lista de notícias com filtro
- [ ] Dica do dia, artigos e resumo do mês

## Fase 6: Contas e nuvem

- [ ] Criar o projeto no Supabase e modelar as tabelas
- [ ] Cadastro e login
- [ ] Trocar a camada de dados do `localStorage` para o Supabase
- [ ] Regras de acesso: cada usuário só vê os próprios dados
- [ ] Migrar os dados locais de quem já usava

## Fase 7: Polimento e lançamento

- [ ] Revisão no celular e de acessibilidade
- [ ] Exportação para CSV
- [ ] Gastos recorrentes e parcelados
- [ ] Política de privacidade e termos (LGPD), com exportar e excluir dados
- [ ] Domínio próprio e teste com alguns amigos

## Fase 8: Assinatura

- [ ] Validar o nome no INPI e definir o preço e o que é pago
- [ ] Integrar o pagamento (Stripe ou Mercado Pago)
- [ ] Página de planos e controle de acesso por plano
