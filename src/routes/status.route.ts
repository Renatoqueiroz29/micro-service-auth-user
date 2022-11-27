import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

//Retorna o status do serviço
statusRoute.use('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).send({status: 'Serviço em operação!'})
});

export default statusRoute;