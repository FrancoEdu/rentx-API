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
        password,
        email,
        driver_license}: ICreateUser): Promise<void> {
        const user = this.repository.create({
            name,
            email, 
            password, 
            driver_license
        })

        await this.repository.save(user)
    }

    async findUserEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})
        return user
    }
}