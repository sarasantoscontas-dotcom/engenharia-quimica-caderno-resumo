# Caderno do Estudante de Engenharia Química

Site de apresentação do produto, baseado na estrutura visual aprovada de Gastronomia, com conteúdo próprio de Engenharia Química. Os projetos anteriores não foram alterados.

## Estrutura e conteúdo

Todas as vinte seções do modelo foram preservadas em função e formato: abertura com fichas flutuantes, visão geral, catálogo visual de ambientes, resumos, exemplo aplicado, flashcards, semana acadêmica completa, telas ilustrativas, funcionalidades detalhadas, percurso da graduação, laboratório, pesquisa/TCC, três seções de planos de atividades, benefícios, referências, FAQ, oferta e suporte.

A biblioteca reúne resumos e perguntas por disciplina de fundamentos, fenômenos de transporte, operações, reações, processos, projeto e sustentabilidade. Cada resumo inclui conceito, desenvolvimento, relação matemática, exemplo numérico e cuidados de interpretação.

A agenda apresenta todos os dias preenchidos. As telas são exemplos visuais, sem campos de entrada. Os planos de monitoria e oficina incluem objetivos, materiais, sequência de 50 minutos e avaliação. O catálogo apresenta ferramentas existentes, sem criar novas funcionalidades no produto de acesso.

No celular, as primeiras dez fichas e vinte respostas começam abertas; no desktop, todas começam abertas. O botão permite abrir/recolher as respostas. Semana, catálogo e planos de atividade não usam carrossel. As fichas têm cores pastel, fita, inclinação suave e respeito à preferência por movimento reduzido.

## Fontes consultadas

O repositório `sarasantoscontas-dotcom/engenharia-quimica-caderno-acesso` foi somente lido. Conteúdo derivado de `content.js`, `academic-foundations.js`, `academic-processes.js`, `academic-applied.js`, `advanced-core-content.js`, `advanced-foundations-content.js`, `advanced-processes-content.js`, `advanced-applied-content.js`, `modules.js` e `README.md`.

Conferência complementar: LearnChemE/University of Colorado Boulder (conservação de massa e balanços de energia) e material de equações de projeto de reatores de H. Scott Fogler/University of Michigan. As referências são indicadas sem redirecionamento para outros sites. Livros integrais não são distribuídos.

Semana, telas, planos de atividade e situações de aplicação são exemplos didáticos. As calculadoras descritas são ferramentas de estudo com hipóteses delimitadas; o site comercial não executa simuladores industriais nem representa um projeto aprovado.

## Compra

Preço exibido: R$ 49,99, em pagamento único, seguindo o modelo solicitado. Checkout próprio: `https://pay.cakto.com.br/avxtje2`. O link está em `assets/config.json` e nos botões estáticos de `index.html` e `404.html`, com abertura em nova aba. Os botões mantêm texto branco sobre fundo de destaque. Não há taxa adicional presumida na página. Alterar a configuração do site não modifica condições na plataforma de pagamento.

O único redirecionamento externo clicável é o checkout. A navegação interna usa âncoras. E-mail de suporte em texto, sem mailto.

## Arquivos e publicação

- `index.html`, `404.html`: estrutura e seções estáticas.
- `assets/content.json`: resumos e flashcards.
- `assets/presentation.json`: agenda, percurso, benefícios e FAQ.
- `assets/app.js`: carregamento, telas e controles.
- `assets/style.css`: design do modelo com ajustes de Engenharia Química.
- `assets/config.json`: checkout e preço.

`npm run build` gera `dist/`. `npm run check` verifica sintaxe. `npm run verify` confere estrutura, checkout, renderização lógica e controles de abertura em um DOM mínimo. `npm start` serve o build local. Não há dependências para instalar. `vercel.json` configura a publicação estática.

A validação lógica não substitui inspeção gráfica em navegador real. Fontes vêm do Google Fonts, com alternativas CSS. Este repositório é um site de apresentação, não o sistema acadêmico editável.
