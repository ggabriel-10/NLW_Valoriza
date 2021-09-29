import {Request, Response, NextFunction} from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



   export async function ensureAdmin (
    request: Request,
    response: Response,
    next: NextFunction){
        
    const {user_id} = request;
    console.log(user_id);

    const userRespositories =getCustomRepository(UsersRepositories);

    const {admin} = await userRespositories.findOne(user_id)

    //Verificar se o usuário é admin

    
    if(admin){
        return next();
    }
    return response.status(401).json({
        erro: "Unauthorized",
    });
}