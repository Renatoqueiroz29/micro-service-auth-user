import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';

//Instanciando o express
const app = express();

//Configuração da aplicação
app.use(express.json()); //Configuração para receber dados json no content type
app.use(express.urlencoded({extended: true }));

//Configurações de Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

//Configuração dos Handlers de Erro
app.use(errorHandler);

//Inicialização do servidor
const  localhost = '127.0.0.1';
const  port = 3000;

app.listen(port, localhost, () => {
    try{
        console.log(`Serviço inicializado na Porta:${ port } SRV: ${ localhost }`);
    }catch{
        console.log('Problema na inicialização do servidoir!');
    }
})