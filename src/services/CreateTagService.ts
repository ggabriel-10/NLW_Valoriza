import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";


class CreateTagService {


    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagRepositories);

        if (!name) {
            throw new Error("Incorrect name!")
        }
        const nameAlreadyExists = await tagsRepositories.findOne({
            name,
        });
        if (nameAlreadyExists) {
            throw new Error("Tag Already Exists!");
        }

        const tag = tagsRepositories.create({
            name,
        });
        await tagsRepositories.save(tag);
        
        return tag;
    }

}
export { CreateTagService };