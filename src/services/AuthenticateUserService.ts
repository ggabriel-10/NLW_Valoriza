import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);

        //Verificar se e-mail existe
        const user = await userRepositories.findOne({
            email,
        });

        if (!user) {
            throw new Error("Email/Password Incorrect!")
        }

        //Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password Incorrect!")
        }

        //Gerar Token
        const token = sign({
            email: user.email
        }, "e71f139345d9f518ed2fb14c64d84976", { //chave secreta
            subject: user.id,
            expiresIn: "1d"
        }
        );

        return token;

    };

}
export { AuthenticateUserService };