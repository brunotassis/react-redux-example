# React + Redux Example

## Requisitos
Para execução da aplicação, tenha instalado em sua maquin ou servidor o node com o gerenciador de pacotes da sua preferencia.

***OBS:*** Para este projeto ultilizei e exemplificarei com o gerenciador yarn

1. Dentro da pasta do projeto execute o comando:
``` yarn install ```

2. Após a instalação das dependencias necessarias o projeto estará pronto para executar com o comando:
``` yarn start ```

3. Por padrão ele está sendo executado na porta ***3000***

## Definição
Este projeto tem como intuito exemplificar habilidades de uso com a lib React mantida pelo facebook e em conjunto as libs Redux e React-Redux

## Exemplos
Os exemplos nesta aplicação são:
1. Alterador de campo e label onde tudo que é digitado no input é passado para o store do redux e recuperado nas props do elemento label do component Field.

2. Contator numerico, exemplificando trés actions dentro do redux:
- incremento, o valor atual será somado com o valor do field;
- decremento, o valor atual será subtraido com o valor atual do field;
- stepChanged, toda vez que o valor do field for alterado será o novo valor a ser incrementado ou decrementado no numero;
