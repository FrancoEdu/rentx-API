import { Repository, getRepository } from "typeorm";

import { ICreateUser } from "../../dtos/ICreateUser";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";

export class UsersRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        password,
        email,
        driver_license,
    }: ICreateUser): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            driver_license,
        });

        await this.repository.save(user);
    }

    async findUserEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findByID(userID: string): Promise<User> {
        const user = await this.repository.findOne(userID);
        return user;
    }
}
