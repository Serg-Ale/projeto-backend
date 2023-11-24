# Projeto Web Back-end

## Descrição
Este repositório contém o código-fonte do projeto web back-end desenvolvido como parte da disciplina. O projeto consiste na construção de uma API web utilizando o framework Express e um banco de dados à escolha dos Alunos . O sistema implementa funcionalidades de gerenciamento de usuários, autenticação, operações CRUD, lógica de negócio personalizada, instalador de banco de dados e documentação Swagger.

## Tecnologias Utilizadas
- **Framework:** Express
- **Banco de dados:** PostgreSQL
- **ORM:** Sequelize
- **Autenticação:** JWT (JSON Web Token)

## Funcionalidades solicitadas:

### Usuários e Sistema de Autenticação (30%)
1. Rota de cadastro de usuários.
2. Usuários administradores com privilégios específicos.
3. Rota para criação de novos administradores.
4. Rota para exclusão de usuários não administradores.
5. Rota de login com geração de token JWT.
6. Rota para alteração de dados pessoais, com restrições de acesso.

### Sistema CRUD (30%)
- Três ou quatro operações CRUD completas.
- Relacionamentos um-para-muitos ou muitos-para-muitos entre os itens.
- Restrições de acesso para inserção, alteração e exclusão (requer autenticação com token válido).
- Opções de listar e buscar com paginação (parâmetros: limite e página).

### Lógica de Negócio, Instalador e Documentação (40%)
- Operação especial de livre escolha do desenvolvedor.
- Rota GET /install/ para a instalação do banco de dados.
- Rota GET /docs contendo a documentação Swagger.

## Como Executar o Projeto
1. Clone o repositório: `git clone https://github.com/Serg-Ale/projeto-backend.git`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute o projeto: `npm start`

## Contribuição
- Sérgio Alexandre - sergioalexandre0716@gmail.com
- Mariana de Oliveira - marianadeoliveira73@hotmail.com
