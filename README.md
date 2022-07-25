# **Front-End React Awesome Invest**
O Projeto AWESOME INVEST é um sistema de gestão financeira criado para fins de estudo. O Sistema tem o objetivo de listar os ativos e efetuar o gerenciamento destes, possibilitando a consulta e compra por parte dos clientes. Além de garantir que o Administrador realize depósitos em conta de clientes e a consulta das transações realizadas.
O Front-End foi desenvolvido utilizando o ReactJs.
<br/>
<br/>

A API foi desenvolvida utilizando o NodeJs, ExpressJs e o ORM Sequelize com Banco de dados MySql. E está disponível para consulta no link abaixo:
```
https://github.com/danielbarbozadasilva/financial-system-backend.git
```
<br/>
<br/>

## **Escopo do produto**
O AWESOME INVEST é um Sistema web que vem com o intuito de facilitar ao cliente investir em ativos. Todas as suas funcionalidades foram pensadas e elaboradas para proporcionar facilidade e comodidade aos usuários da plataforma.

O Sistema tem como objetivo gerenciar os ativos cadastrados, disponibilizando ao cliente a opção de adquiri-los. O administrador do sistema possui o controle dos ativos cadastrados, assim como dos clientes, com a possibilidade de realizar depósitos em conta de clientes e obter informações de transações realizadas.

Os usuários do sistema são os Clientes e o Administrador. Todos possuem acesso ao sistema e a seu respectivo espaço. Além disso o Sistema conta com uma tela inicial que permite ao público navegar de modo simples entre os ativos, os ativos mais adquiridos e informações da plataforma.
<br/>
<br/>

## **Instalação**
Clone o repositório na pasta de sua preferência.
```
https://github.com/danielbarbozadasilva/financial-system-frontend
```

Abra a pasta do repositório clonado, e crie um arquivo ".env", exemplo:
```
REACT_APP_API=http://localhost:3011
REACT_APP_VERSION=/v1
REACT_APP_TOKEN_KEY=gestao
```

Abra a pasta do repositório clonado, e instale as dependências do projeto através do comando:
```
yarn install
```

Execute o comando para rodar o projeto:
```
yarn start
```
<br/>


## **Requisitos funcionais**
<br/>

[RF01] É necessário lidar com a autenticação do usuário administrador. Explicação: O Sistema deve permitir o acesso do administrador com base em suas credenciais. Bloqueando qualquer tentativa de acesso por outros tipos de usuários.

[RF02] É necessário lidar com a autenticação do usuário cliente. Explicação: O Sistema deve permitir o acesso aos clientes com base em suas credenciais. Bloqueando qualquer tentativa de acesso por outros usuários.

[RF03] O Sistema deve manter ativos. Explicação: O Sistema permitirá que o usuário administrador consulte ativos, cadastre novos ativos, edite os dados do ativo e exclua um ativo.

[RF04] O usuário cliente deve se cadastrar. Explicação: O Sistema permitirá o cadastro do cliente.

[RF05] O usuário administrador deve autorizar o acesso do cliente ao sistema. Explicação: O administrador pode autorizar ou não o acesso de clientes ao sistema.

[RF06] O usuário administrador deve conseguir visualizar os dados do cliente no sistema. Explicação: O administrador pode consultar os dados do cliente no sistema.

[RF07] O usuário administrador deve conseguir atualizar os dados do cliente no sistema. Explicação: O administrador pode atualizar os dados do cliente no sistema.

[RF08] O usuário administrador deve conseguir visualizar todas as transações realizados pelos clientes. Explicação: O Sistema permite que o administrador visualize as transações realizados pelo cliente.

[RF09] O usuário cliente deve poder visualizar as transações que realizou. Explicação: O Sistema permite que o cliente visualize as suas transações.

[RF10] O cliente deve visualizar os seus dados bancários. Explicação: O Sistema deve exibir o saldo em conta e seu respectivo patrimônio.

[RF11] O usuário administrador deve poder efetuar depósitos na conta do cliente. Explicação: O Sistema deve permitir ao administrador depositar um determinado valor na conta do cliente.

[RF12] O Sistema deve exibir uma barra de pesquisa para facilitar a busca por contas. Explicação: Ao consultar os dados da conta do cliente o usuário administrador deve poder filtrar as informações do cliente.
<br/>
<br/>
<br/>

> ## Licença
- Licença GPLv3
<br/>
<br/>
<br/>

> ## Metodologias e Padrões
* Responsive Layout
* Conventional Commits
* GitFlow
<br/>
<br/>
<br/>

> ## Bibliotecas e Ferramentas
* React
* Reach Router
* Styled-components
* Axios
* Git
* Eslint
* Standard Javascript Style
* Chart
* Material UI
* React-icons
* React-redux-toastr
* React-toast
* Reactstrap
* Redux-multi
* Redux-thunk
* React-helmet
<br/>
<br/>
<br/>

> ## **Telas**
<br/>

## **Tela Inicial**
<br/>
<img src="./src/assets/img/prints/print01.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Top05 Investimentos**
<br/>
<img src="./src/assets/img/prints/print02.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela de Login**
<br/>
<img src="./src/assets/img/prints/print03.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela de Cadastro**
<br/>
<img src="./src/assets/img/prints/print04.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Inicial do Cliente**
<br/>
<img src="./src/assets/img/prints/print07c.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Cliente Investimentos**
<br/>
<img src="./src/assets/img/prints/print05.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Cliente Histórico de Transações Efetuadas**
<br/>
<img src="./src/assets/img/prints/print06.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Inicial do Administrador**
<br/>
<img src="./src/assets/img/prints/print07.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Administrador Manter Ativos**
<br/>
<img src="./src/assets/img/prints/print08.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Administrador Manter Clientes**
<br/>
<img src="./src/assets/img/prints/print09.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Administrador Consultar Transações**
<br/>
<img src="./src/assets/img/prints/print10.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Tela Administrador Realizar Depósitos**
<br/>
<img src="./src/assets/img/prints/print11.png" alt=""/>
<br/>
<br/>
<br/>
<br/>
