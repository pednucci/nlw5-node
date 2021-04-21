import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";


class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UserRepository)
        //Verificar se o usuário existe

        const userExists = await usersRepository.findOne({
            email
        })

        //Se existir, retornar user

        if(userExists){
            return userExists;
        }

        //Se não existir, salvar no DB
        
        const user = usersRepository.create({
            email,
        });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersService };