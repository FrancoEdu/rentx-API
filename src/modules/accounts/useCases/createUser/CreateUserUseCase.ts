import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUser } from "../../dtos/ICreateUser"

@injectable()
export class CreateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ){}

    async execute({name, email,password,driver_license}:ICreateUser):Promise<void>{
        
        const userAlrearyExists = await this.usersRepository.findUserEmail(email)

        if(userAlrearyExists){
            throw new Error("User already exists !!")
        }
        
        const passwordHash = await hash(password, 8)

        this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        })
    }

}