import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

export class AuthenticateUserContoller {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const authenticateUseCase = container.resolve(AuthenticateUserUseCase);
        const authenticateInfo = await authenticateUseCase.execute({
            email,
            password,
        });
        return response.status(201).json(authenticateInfo);
    }
}
