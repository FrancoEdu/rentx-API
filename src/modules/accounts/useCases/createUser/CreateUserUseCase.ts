import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../error/AppError";
import { ICreateUser } from "../../dtos/ICreateUser";
import { IUserRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUser): Promise<void> {
        const userAlrearyExists = await this.usersRepository.findUserEmail(
            email
        );

        if (userAlrearyExists) {
            throw new AppError("User already exists !!", 401);
        }
        const passwordHash = await hash(password, 8);

        this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
        });
    }
}
