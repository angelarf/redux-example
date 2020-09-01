# Motivação

Esse projeto é um exemplo de como o iniciar e fluxo bem básico para entender o redux.

Apresentação auxiliar: https://www.canva.com/design/DAEGYSYr9Dc/XNG7l0eC3miRM9OtXamTVA/view#1 .

Foi criado utilizando o `create react app`.
Para executar: `npm start`.

# Informações úteis:

## Dependências principais para o redux:

- react-redux
- redux
- redux-devtools-extension
- redux-thunk

## Organização do projeto:

```
  - index.js              # Adiciona provider a raiz da app para q se esteja conectado.
  - src/
    - store               # Lógica para criação da store (com seus middlewares)
    - reducers            # Criação do reducer raiz e importação dos reducers dos components
    - counter             # componente base para a mágica acontecer
      - viewer            # parte onde vai exibir o resultado do counter
      - buttons           # controlam os botoes de add, sub do contador
      - selectors         # contém a lógica que acessa propriedades do state
      - action-creators   # centraliza as actions desse componente
      - reducers          # contém o reducer que vai entender as actions relacionadas
                          # ao counter e atualizar essa parte do state

```
