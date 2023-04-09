import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../error/AppError";

interface IPayload{
    sub: string
}


export async function ensureAuthenticated(request:Request, response:Response, next: NextFunction){
    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new AppError("Token missing", 401)
    }

    const [Bearer, token] = authHeader.split(" ")

    try {
        const { sub: userID } = verify(token, "3fa9519d4937b5ef6c44f2a3a4dd7e1dca298e59") as IPayload

        const usersRepository = new UsersRepository();

        const verifyIfUserExists = usersRepository.findByID(userID)

        if(!verifyIfUserExists){
            throw new AppError("User doesn't exists", 401)
        }

        next()
    } catch (error) {
        throw new AppError("Invalid token", 401)
    }   
}