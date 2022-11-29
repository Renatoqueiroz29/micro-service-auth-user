import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';

const app = express();

//Configuração da aplicação
app.use(express.json()); //Configuração para receber dados json no content type
app.use(express.urlencoded({extended: true }))

//Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);

//Middlewares tratamento de erros
app.use(errorHandler);

const  localhost = '127.0.0.1';
const  port = 3000;

//Escuta o serviço na porta e local indicado
app.listen(port, localhost, () => {
    try{
        console.log(`Serviço inicializado na Porta:${ port } SRV: ${ localhost }`)
    }catch{
        console.log('Problema na inicialização do servidoir!')
    }
})