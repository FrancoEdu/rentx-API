import { inject } from "tsyringe";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUser } from "../../dtos/ICreateUser"

export class CreateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ){}

    async execute({name, username, email,password,driver_license}:ICreateUser):Promise<void>{
        await this.usersRepository.create({
            name, 
            username, 
            email,
            password,
            driver_license
        })
    }

}