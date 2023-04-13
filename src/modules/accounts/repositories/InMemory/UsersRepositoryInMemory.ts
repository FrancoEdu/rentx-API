import { User } from "../../entities/User";
import { ICreateUser, IUserRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUserRepository{

    users: User[] = []

    async create({driver_license, email, name, password}: ICreateUser): Promise<void> {
        const user = new User()

        Object.assign(user, {
            driver_license, 
            email, 
            name,
            password
        })

        this.users.push(user)
    }

    async findUserEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email)
    }

    async findByID(userID: string): Promise<User> {
        return this.users.find((user) => user.id === userID)
    }

}