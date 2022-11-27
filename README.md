### Microserviço de autenticação com Nodejs

Este projeto é uma API que serveum microserviço de autenticação de usuários em Nodejs utilizando banco de dados relacional Postgresql.

Endpoints:
#### Usuários

   > - GET /users
   > - GET /users/:uuid
   > - POST /users
   > - PUT /users/:uuid
   > - DELETE /users/:uuid

#### Autenticação

   > - POST /token
   > - POST /token/validate

#### Dependencias
1. npm install -g typescript
2. npm install --save-dev typescript
3. npm install --save-dev @types/node
4. npm install --save-dev @types/express
5. npm install --save express - utilizado para criação do servidor
6. npm install --save-dev @types/express
7. npm install --save-dev ts-node-dev
8. npm install --save http-status-codes
9. npm install --save pg
10. npm install --save-dev @types/pg

