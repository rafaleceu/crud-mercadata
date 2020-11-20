# CRUD - MercaData

CRUD desenvolvido para o processo seletivo de estágio na Mercadata

Buildado com NodeJS 15.0.1

# Tecnologias

###  Client Side
 1. React
 2. Axios
 3. Bootstrap
###  Server Side
 1. Express (bodyparser, cors)
 2. MySQL
 3. TypeORM
 4. MySQL
 5. Bcryptjs
 6. Typescript
 7. Nodemon (para desenvolvimento)

## Iniciar

Client Side `npm start`

Server side `npm run start:server`

> Portas padrão:\
> Client Side: 8081\
> Server Side: 8080

## MySQL Config

Arquivo para configurar banco de dados MySQL com o sistema -> ormconfig.json

## Features

Create - criar usuário no banco de dados a partir de um formulário.\
Read - Uma tabela com todos usuários, excluindo as senhas.\
Update - Atualizar usuário unico no banco de dados\
Delete  - Deletar registro do usuário no banco de dados