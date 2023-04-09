import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUsersRepository";
import {compare} from "bcryptjs"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../../error/AppError";

interface IRequest{
    email: string,
    password:string,
}

interface IResponse{
    user:{
        name: string,
        email: string,
    },
    token: string
}

@injectable()
export class AuthenticateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ){}
    async execute({email, password}: IRequest): Promise<IResponse>{
        const user = this.usersRepository.findUserEmail(email)

        if(!user){
            throw new AppError("Email or password incorrect !!", 401)
        }

        const passwordMatch = await compare(password, (await user).password)

        if(!passwordMatch){
            throw new AppError("Email or password incorrect !!", 401)
        }

        const token = sign({}, "3fa9519d4937b5ef6c44f2a3a4dd7e1dca298e59", {
            subject: (await user).id,
            expiresIn: "1d" //token expira a cada um dia
        }) //primeiro paramentro são payload, nunca pode ser senha; já o segundo pode ser qualquer hash para o secretocode

        const tokenReturn: IResponse = {
            token,
            user:{
                name: (await user).name,
                email: (await user).email
            }
        }

        return tokenReturn
    }
}