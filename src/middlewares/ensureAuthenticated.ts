import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {

    // Receber o Token
    const authToken = request.headers.authorization;
   
    // Validar se o token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");
    

    // Validar se o token é valido
    try{
    const {sub } = verify(token ,"e71f139345d9f518ed2fb14c64d84976") as IPayload;

    // Recuperar informações do usuário
    request.user_id = sub;
    
    return next();
    }catch(err) {
        return response.status(401).end();
    }   
    


}