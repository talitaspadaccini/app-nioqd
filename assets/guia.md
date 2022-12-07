## Índice

:large_blue_diamond:[CSS Display](#css-display)
:large_blue_diamond:[CSS Position](#css-position)   
:large_blue_diamond:[](#)
    :diamond_shape_with_a_dot_inside: [](#)
    :diamond_shape_with_a_dot_inside: [](#)
    :diamond_shape_with_a_dot_inside: [](#)
    :diamond_shape_with_a_dot_inside: [](#)


# CSS Display

A propriedade CSS display é utilizada para indicar a forma como os elementos HTML serão dispostos na página ou em espaços delimitados. Por essa característica, é um recurso essencial para manter a organização dos elementos na página.
Outra característica dessa propriedade é a facilidade para criar layouts responsivos, que são facilmente adaptados para diferentes tamanhos de tela.

:diamond_shape_with_a_dot_inside: [INLINE: Renderizando o elemento HTML embutido no bloco](#inline-elemento-imbutido-no-bloco)
:diamond_shape_with_a_dot_inside: [BLOCK: Renderizando o elemento html como um bloco](#block-renderizando-o-elemento-html-como-um-bloco)
:diamond_shape_with_a_dot_inside: [CONTENTS: Alterando comportamento do elemento filho em relação ao elemento pai](#contents-alterando-comportamento-do-elemento-filho-em-relação-ao-elemento-pai)
:diamond_shape_with_a_dot_inside: [FLEX: Renderizando o elemento html de forma responsiva e flexível](#flex-renderizando-o-elemento-html-de-forma-responsiva-e-flexível)
:diamond_shape_with_a_dot_inside: [GRID: Renderizando o elemento html como um container de grade](#grid-renderizando-o-elemento-html-como-um-container-de-grade)
:diamond_shape_with_a_dot_inside: [TABLE: Renderizando o elemento HTML como uma tabela](#table-renderizando-o-elemento-html-como-uma-tabela)
:diamond_shape_with_a_dot_inside: [TABLE-CAPTION: Configurando o elemento título de uma tabela](#table-caption-configurando-o-elemento-título-de-uma-tabela)
:diamond_shape_with_a_dot_inside: [TABLE-COLUMN-GROUP: Configurando um grupo de colunas em uma tabela](#table-column-group-configurando-um-grupo-de-colunas-em-uma-tabela)
:diamond_shape_with_a_dot_inside: [TABLE-HEADER-GROUP: Configurando um bloco de linhas para o tipo de título das colunas](#table-header-group-configurando-um-bloco-de-linhas-para-o-tipo-de-título-das-colunas)
:diamond_shape_with_a_dot_inside: [TABLE-FOOTER-GROUP: Configurando um bloco de linhas para o tipo de rodapés de coluna](#table-footer-group-configurando-um-bloco-de-linhas-para-o-tipo-de-rodapés-de-coluna)
:diamond_shape_with_a_dot_inside: [TABLE-ROW-GROUP: Configurando um bloco de linhas para o corpo de dados de um elemento da tabela](#table-row-group-configurando-um-bloco-de-linhas-para-o-corpo-de-dados-de-um-elemento-da-tabela)
:diamond_shape_with_a_dot_inside: [TABLE-CELL: Configurando o preenchimento de espaço em uma célula](#table-cell-configurando-o-preenchimento-de-espaço-em-uma-célula)
:diamond_shape_with_a_dot_inside: [TABLE-COLUMN: Configurando coluna(s) de uma tabela](#table-column-configurando-colunas-de-uma-tabela)
:diamond_shape_with_a_dot_inside: [TABLE-ROW: Configurando linha(s) de uma tabela](#table-row-configurando-linhas-de-uma-tabela)
:diamond_shape_with_a_dot_inside: [LIST-ITEM: Renderizando o elemento HTML como um item de lista](#list-item-renderizando-o-elemento-html-como-um-item-de-lista)
:diamond_shape_with_a_dot_inside: [RUN-IN: Renderizando o elemento HTML como um bloco ou embutido](#run-in-renderizando-o-elemento-html-como-um-bloco-ou-embutido)
:diamond_shape_with_a_dot_inside: [NONE: Desativando a renderização do elemento HTML no bloco](#none-desativando-a-renderização-do-elemento-html-no-bloco)
:diamond_shape_with_a_dot_inside: [INITIAL: Configurando a propriedade para o valor inicial](#initial-configurando-a-propriedade-para-o-valor-inicial)
:diamond_shape_with_a_dot_inside: [INHERIT: Herdando a propriedade de seu elemento pai](#inherit-herdando-a-propriedade-de-seu-elemento-pai)

## INLINE: Renderizando o elemento HTML embutido no bloco

O valor CSS display __inline__ é utilizado quando queremos que os elementos fiquem posicionados lado a lado. É importante dizer que, ao utilizar esse valor, as propriedades width (largura) e height (altura) serão ignoradas se forem definidas no código CSS.

`display: inline;`

## BLOCK: Renderizando o elemento HTML como um bloco

Quando atribuímos o valor CSS display __block__ à propriedade, significa que o elemento será posicionado em uma nova linha.

`display: block;`

## INLINE-BLOCK: Definindo propriedades de largura e altura para o elemento HTML

Ao utilizarmos o valor CSS display __inline-block__ podemos organizar os elementos lado a lado e definirmos as propriedades de largura e altura, pois elas não serão ignoradas pelo navegador.

`display: inline-block;`

## CONTENTS: Alterando comportamento do elemento filho em relação ao elemento pai

Quando a propriedade display é definida como __contents__, significa que as características da caixa delimitadora do espaço do elemento serão ignoradas e ele fará parte do elemento pai. Vale ressaltar que outras propriedades definidas para o elemento continuam valendo, como a cor e o estilo da fonte.

`display: contents;`

## FLEX: Renderizando o elemento HTML de forma responsiva e flexível

O valor CSS display __flex__ é utilizado para organizar os elementos HTML de forma responsiva. Na prática, ao definirmos um elemento com esse valor, ele funciona como um container para agrupar os elementos filhos, que são considerados flex-itens e são organizados nos sentidos horizontal ou vertical.

Ao definirmos o display como flex, podemos utilizar outras propriedades adicionais para estabelecer como os elementos serão dispostos na página ou em um espaço específico. São elas:

:small_blue_diamond: *flex-direction*: determina a direção em que os elementos serão dispostos, que pode ser __row__ (linha) ou __column__ (coluna), ou ainda, __row-reverse__ e __column-reverse__ para exibir os itens na posição invertida;
:small_blue_diamond: *flex-wrap*: para definir como o conteúdo de um elemento será exibido dentro do espaço. Em caso de texto, por exemplo, ele pode ser forçado a permanecer na mesma linha ou dividido conforme a necessidade. Os valores possíveis são: __nowrap__ para não quebrar a linha, __wrap__ para quebrar e __wrap-reverse__, em que o conteúdo é preenchido no sentido de baixo para cima;
:small_blue_diamond: *flex-flow*: representa uma forma abreviada de escrever os valores dos atributos __flex-direction__ e __flex-wrap__;
:small_blue_diamond: *justify-content*: indica como os elementos filhos serão alinhados horizontalmente no espaço definido como container. Os valores possíveis são: __flex-start__, __flex-end__, __center__, __space-between__, __space-around__ e __space-evenly__;
:small_blue_diamond: *align-itens*: representa o alinhamento vertical dos elementos pertencentes ao container. Os valores possíveis são: __flex-start__, __flex-end__, __stretch__, __center__ e __baseline__;
:small_blue_diamond: *align-content*: funciona semelhante ao align-itens, entretanto, alinha o conteúdo verticalmente em relação às linhas.

## GRID: Renderizando o elemento HTML como um container de grade

O CSS display __grid__ permite organizar os elementos da página de forma horizontal e forma vertical, simultaneamente. Para isso, ele também conta com uma série de propriedades adicionais para ajudar a definir como os itens serão dispostos na página ou no espaço disponível.

Basicamente, o grid é formado por um conjunto de linhas e colunas. Se nada for especificado, os elementos são organizados em bloco, ou seja, um em cada linha. Por isso, é preciso definir outras propriedades para organizar no formato desejado. São elas:

:small_blue_diamond: *column-gap*: define o espaço entre as colunas;
:small_blue_diamond: *row-gap*: define o espaço entre as linhas;
:small_blue_diamond: *gap*: estabelece o mesmo espaço de distanciamento entre linhas (__row-gap__) e colunas (__column-gap__);
:small_blue_diamond: *grid-area*: determina a área do elemento, ou seja, quantas linhas e colunas o item ocupará no grid;
:small_blue_diamond: *grid-auto-columns*: define o valor automático para a coluna;
:small_blue_diamond: *grid-auto-flow*: indica o sentido em que os itens serão inseridos automaticamente na grade;
:small_blue_diamond: *grid-auto-rows*: define o valor automático para a linha do grid;
:small_blue_diamond: *grid-column-start*: especifica o início do grid;
:small_blue_diamond: *grid-column-end*: especifica o final do grid;
:small_blue_diamond: *grid-column*: define a junção das propriedades __grid-column-start__ e __grid-column-end__;
:small_blue_diamond: *grid-row-gap*: indica o tamanho do espaço entre as linhas;
:small_blue_diamond: *grid-column-gap*: indica o tamanho do espaço entre as colunas do grid;
:small_blue_diamond: *grid-gap*: representa a junção das propriedades __grid-row-gap__ e __grid-column-gap__;
:small_blue_diamond: *grid-row-start*: indica a linha em que o item será posicionado;
:small_blue_diamond: *grid-row-end*: indica em que linha será o fim do item;
:small_blue_diamond: *grid-row*: representa a união das propriedades __grid-row-start__ e __grid-row-end__;
:small_blue_diamond: *grid-template*: representa a união das propriedades __grid-template-rows__, __grid-template-columns__ e __grid-areas__; 
:small_blue_diamond: *grid-template-areas*: especifica a área do grid com o nome dos itens do grid;
:small_blue_diamond: *grid-template-columns*: estabelece o tamanho das colunas e a quantidade para o layout grid;
:small_blue_diamond: *grid-template-rows*: indica o tamanho das linhas do grid.

## TABLE: Renderizando o elemento HTML como uma tabela

O CSS display __table__ faz com que o elemento tenha as características de uma tabela. Ela funciona de forma semelhante à definição de tabelas por código HTML, entretanto, a formatação é feita por meio de propriedades CSS.

Portanto, o valor display igual a table indica a estrutura da tabela. Será preciso definir outros elementos, de que falaremos a seguir, para construir a formatação da tabela conforme a quantidade de linhas, colunas e demais complementos.

`display: table;`

## TABLE CAPTION: Configurando o elemento título de uma tabela

O display __table-caption__ equivale à tag HTML <caption> e é utilizado para indicar que o elemento corresponde a um texto descritivo que será inserido na linha superior externa à tabela.

`display: table-caption;`

## TABLE-COLUMN-GROUP: Configurando um grupo de colunas em uma tabela

O display igual a __table-column-group__ funciona de forma equivalente à tag HTML <colgroup> e é utilizado para delimitar um grupo de colunas.

`display: table-column-group;`

## TABLE-HEADER-GROUP: Configurando um bloco de linhas para o tipo de título das colunas

O display __table-header-group__ equivale à tag HTML <thead> e indica que o elemento corresponde ao cabeçalho para a tabela ou para um trecho dela.

`display: table-header-group;`

## TABLE-FOOTER-GROUP: Configurando um bloco de linhas para o tipo de rodapés de coluna

O display __table-footer-group__ é utilizado para indicar que o elemento corresponde ao rodapé da tabela.

`display: table-footer-group;`

## TABLE-ROW-GROUP: Configurando um bloco de linhas para o corpo de dados de um elemento da tabela

O display __table-row-group__ funciona de forma similar à tag HTML <tbody> e é utilizado para delimitar grupos de linha na tabela.

`display: table-row-group;`

## TABLE-CELL: Configurando o preenchimento de espaço em uma célula

O display __table-cell__ corresponde ao espaço disponível para o conteúdo exibido na tabela e é equivalente às tags HTML <td> e <th>.

`display: table-cell;`

## TABLE-COLUMN: Configurando coluna(s) de uma tabela

O __table-column__ indica quais colunas pertencem a um grupo de colunas. Essa propriedade é utilizada em conjunto com a table-column-group para indicar cada coluna especificamente.

`display: table-column;`

## TABLE-ROW: Configurando linha(s) de uma tabela

O __table-row__ indica que o elemento corresponde a uma linha da tabela. Ele é equivalente à tag HTML <tr>.

`display: table-row;`

## LIST-ITEM: Renderizando o elemento HTML como um item de lista

O elemento indicado com o display igual a __list-item__ é exibido com as características de um item de uma lista. Ele pode ser utilizado em conjunto com as propriedades __list-style-type__ e __list-style-position__ para definir o estilo do item.

`display: list-item;`

## RUN-IN: Renderizando o elemento HTML como um bloco ou embutido

O display __run-in__ funciona semelhante ao display block ou inline. Sua característica depende do contexto em que está inserido. Se for definido apenas como run-in, ele funciona como o block. Já, se for associado ao display inline, assume essa característica.

`display: run-in;`

## NONE: Desativando a renderização do elemento HTML no bloco

Quando definimos um elemento com CSS display __none__, significa que ele e os seus elementos filhos não são exibidos na tela.

`display: none;`

## INITIAL: Configurando a propriedade para o valor inicial

Como mencionamos, por padrão, os elementos podem ser block ou inline. Ao definirmos o valor de display como __initial__, ele assume o valor original correspondente ao tipo de elemento.

`display: initial;`

## INHERIT: Herdando a propriedade de seu elemento pai

Para que um elemento herde as características da propriedade display do elemento pai, devemos definir o seu valor como __inherit__.

`display: inherit;`

> O CSS display é uma propriedade utilizada para organizar os elementos na página HTML. Ela pode conter diferentes valores, entre eles o flex e o grid, que possibilitam a criação de layouts responsivos. Dessa forma, podemos construir aplicações que são facilmente adaptadas aos diferentes tamanhos de tela.


# CSS Position

O __CSS position__ é uma propriedade utilizada para determinar o posicionamento dos elementos na página. Ela é usada em conjunto com propriedades auxiliares, entre elas: *bottom*, *top*, *left* e *right*, que ajudam a definir de que forma o elemento será posicionado na tela.

É importante entender como o CSS position funciona, pois essa propriedade pode sobrepor elementos, além de ser utilizada para aplicar efeitos interessantes, como a fixação do cabeçalho ao rolar a página. 

Por padrão, seu valor é sempre definido como __static__, ou seja, acompanha o fluxo normal do posicionamento na página. Portanto, se nada for especificado, ele será posicionado conforme a ordem natural dos elementos usados na página.

:diamond_shape_with_a_dot_inside: [STATIC: Mantendo a posição padrão do elemento](#static-mantendo-a-posição-padrão-do-elemento)
:diamond_shape_with_a_dot_inside: [RELATIVE: Alterando a posição do elemento em relação à sua posição normal](#relative-alterando-a-posição-do-elemento-em-relação-à-sua-posição-normal)
:diamond_shape_with_a_dot_inside: [FIXED: Fixando a posição de elementos em uma janela de visualização](#fixed-fixando-a-posição-de-elementos-em-uma-janela-de-visualização)
:diamond_shape_with_a_dot_inside: [ABSOLUTE: Posicionando um elemento em relação ao elemento pai](#absolute-posicionando-um-elemento-em-relação-ao-elemento-pai)
:diamond_shape_with_a_dot_inside: [STICKY: A posição do elemento é relativa até que ultrapasse os limites do bloco](#sticky-a-posição-do-elemento-é-relativa-até-que-ultrapasse-os-limites-do-bloco)
:diamond_shape_with_a_dot_inside: [INITIAL: Redefinindo a propriedade para o valor padrão](#initial-redefinindo-a-propriedade-para-o-valor-padrão)
:diamond_shape_with_a_dot_inside: [](#)

## STATIC: Mantendo a posição padrão do elemento

O valor da propriedade CSS position __static__ determina que o elemento utilizará o posicionamento padrão, ou seja, atribuirá o comportamento natural na página. É importante dizer que, ao utilizar a condição position: static, as propriedades top, bottom, left e right atribuídas ao elemento são ignoradas pelo navegador.

`position: static;`

## RELATIVE: Alterando a posição do elemento em relação à sua posição normal

A propriedade CSS position __relative__ determina que o elemento será posicionado de acordo com o fluxo natural da página. Entretanto, ao utilizá-lo em conjunto com as propriedades auxiliares, o posicionamento será ajustado de acordo com as indicações. Por exemplo, se definirmos left: 20px, o elemento será afastado 20 pixels à esquerda a partir de seu ponto de origem.

```
position: relative;
left: 20px;
```

## FIXED: Fixando a posição de elementos em uma janela de visualização

O valor da propriedade CSS position __fixed__ indica que o elemento terá um valor fixo em relação ao viewport, ou seja, à área visível da tela.

```
position: fixed;
top: 0;
```

## ABSOLUTE: Posicionando um elemento em relação ao elemento pai

O valor da propriedade CSS position __absolute__ indica que o elemento ficará em uma posição fixa em relação à página.

```
position: absolute;
bottom: 0;
```

## STICKY: A posição do elemento é relativa até que ultrapasse os limites do bloco

A propriedade position __sticky__ CSS tem o comportamento variado. No primeiro momento, ela funciona com a posição relativa até atingir determinado limite, que pode ser a altura da tela ou o tamanho de um container, caso ele esteja inserido em uma <div>, por exemplo.

Ao fazer a rolagem da página e atingir o limite do bloco, o elemento definido como sticky terá o comportamento como fixed e respeitará os valores definidos pelas propriedades auxiliares para indicar a posição. Essa propriedade é utilizada, por exemplo, para manter o header fixo no topo ao rolar a página.

```
position: sticky;
top: 0;
```

## INITIAL: Redefinindo a propriedade para o valor padrão

Definir o valor de position para __initial__ é o mesmo que dizer ao navegador para utilizar o valor padrão definido para aquele elemento, que é o posicionamento static.

`position: initial;`
