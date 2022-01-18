import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { User } from "../entities/User";
import { classToPlain } from "class-transformer";


class ListUsersService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.find();

        return classToPlain(users);
    }

}
export {ListUsersService};