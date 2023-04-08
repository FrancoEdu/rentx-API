import { IUserRepository } from "../IUsersRepository";
import { ICreateUser } from "../../dtos/ICreateUser"
import { Repository, getRepository } from "typeorm";
import { User } from "../../entities/User";

export class UsersRepository implements IUserRepository{
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }

    async create({name,
        username,
        password,
        email,
        driver_license}: ICreateUser): Promise<void> {
        const user = this.repository.create({
            name, 
            username, 
            email, 
            password, 
            driver_license
        })

        await this.repository.save(user)
    }
}