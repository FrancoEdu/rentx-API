import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";
import { container } from "tsyringe";

export class AuthenticateUserContoller{
    async handle(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body
        const authenticateUseCase = container.resolve(AuthenticateUserUseCase)
        const authenticateInfo = await authenticateUseCase.execute({email,password})
        return response.status(201).json(authenticateInfo)
    }
}