import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload{
    sub: string
}


export async function ensureAuthenticated(request:Request, response:Response, next: NextFunction){
    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new Error("Token missing")
    }

    const [Bearer, token] = authHeader.split(" ")

    try {
        const { sub: userID } = verify(token, "3fa9519d4937b5ef6c44f2a3a4dd7e1dca298e59") as IPayload

        const usersRepository = new UsersRepository();

        const verifyIfUserExists = usersRepository.findByID(userID)

        if(!verifyIfUserExists){
            throw new Error("User doesn't exists")
        }
        
        next()
    } catch (error) {
        throw new Error("Invalid token")
    }   
}