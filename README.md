# Venda Valorizada

## Descrição do Projeto

O Venda Valorizada é um aplicativo em desenvolvimento que permite aos usuários cadastrar produtos, adicionar vários fatores além da margem de lucro para calcular o valor de venda, e gerenciar seus produtos em uma lista. O objetivo é fornecer uma ferramenta eficaz para auxiliar na valorização e gestão de produtos.

## Tecnologias Utilizadas

- **Front-End**: React com Vite
- **Back-End**: ExpressJS
- **Banco de Dados**: MongoDB Atlas, utilizando Mongoose para modelagem de dados

## Funcionalidades

- **Login de Usuário**: Autenticação de usuários para acesso seguro.
- **Cadastro de Produtos**: Permite que os usuários cadastrem novos produtos com informações detalhadas.
- **Cálculo de Valor de Venda**: Adiciona vários fatores, além da margem de lucro, para calcular o valor final de venda do produto.
- **Gestão de Produtos**: Listagem e gerenciamento de produtos cadastrados.

## Estrutura do Projeto

- `client/`: Contém o código do front-end (React com Vite).
- `server/`: Contém o código do back-end (ExpressJS).
- `models/`: Contém os modelos de dados para o MongoDB (Mongoose).
- `routes/`: Define as rotas para a API do back-end.
- `controllers/`: Contém a lógica de controle para as rotas da API.

## Estado Atual

O projeto está em desenvolvimento. A seguir estão as etapas concluídas e as que estão em progresso:

### Front-End
- [x] Configuração inicial do projeto com Vite
- [x] Criação das páginas de login e cadastro
- [x] Implementação do formulário de cadastro de produtos
- [ ] Implementação da lista de produtos
- [ ] Cálculo do valor de venda

### Back-End
- [x] Configuração inicial do servidor com ExpressJS
- [x] Conexão com MongoDB Atlas utilizando Mongoose
- [ ] Criação das rotas de autenticação (login e cadastro)
- [ ] Criação das rotas de produtos (CRUD)
- [ ] Implementação da lógica de cálculo de valor de venda

## Como Executar

### Pré-requisitos

- Node.js instalado
- MongoDB Atlas configurado

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/SeuUsuario/venda-valorizada.git

2. Instale as dependências do front-end:
    ```bash
    cd client
    npm install
    npm run dev

3. Instale as dependências do back-end:
    ```bash
    cd ../server
    npm install
    npm start

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

