import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true }))

//Utilizando a rota criada
app.use(usersRoute);

app.use('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'Nodejs é o máximo!'})
});

const  localhost = '127.0.0.1';
const  port = 3000;

app.listen(port, localhost, () => {
    console.log('Aplicação executando na porta 3000!')
})