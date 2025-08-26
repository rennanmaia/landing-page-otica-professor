# Documentação CSS Grid

O **CSS Grid** é um sistema de layout bidimensional que permite organizar elementos em linhas e colunas, proporcionando um controle avançado sobre o posicionamento e alinhamento dos itens dentro de um container.

## Conceitos básicos

- Para ativar o grid, defina `display: grid` no container.
- Os elementos filhos diretos do container se tornam **itens da grid**.
- Utiliza as propriedades `grid-template-columns` e `grid-template-rows` para definir as colunas e linhas respectivamente.
- Permite posições explícitas dos itens usando propriedades como `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`.
- Suporta espaçamentos entre colunas e linhas com `column-gap`, `row-gap` ou a forma abreviada `gap`.

## Quando usar CSS Grid

- Para layouts mais complexos e bidimensionais, que exigem controle simultâneo de linhas e colunas.
- Ideal para a estruturação de páginas inteiras ou grandes seções do site.

---

Para um guia mais detalhado, veja a [documentação completa de CSS Grid](./estilizacao-web.md#css-grid-vs-flexbox-quando-usar-cada-um).

---

# Documentação Flexbox

O **Flexbox** é um sistema de layout unidimensional que facilita o alinhamento e distribuição de espaço dos itens em um container, podendo trabalhar na direção horizontal (linha) ou vertical (coluna).

## Conceitos básicos

- Para ativar o Flexbox, defina `display: flex` no container.
- Os itens internos se organizam em um eixo principal (horizontal ou vertical).
- Usa propriedades como `justify-content` para controle do alinhamento no eixo principal.
- Usa `align-items` e `align-content` para controle do eixo transversal.
- Facilita o alinhamento dinâmico e responsivo de elementos em uma única dimensão.

## Quando usar Flexbox

- Para componentes com layout linear, como menus, barras de navegação, listas.
- Quando o alinhamento e ordenação em uma única direção é o foco principal.

---
