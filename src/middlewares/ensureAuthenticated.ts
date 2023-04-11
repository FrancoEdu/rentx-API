import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../error/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userID } = verify(
            token,
            "3fa9519d4937b5ef6c44f2a3a4dd7e1dca298e59"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = usersRepository.findByID(userID);

        if (!user) {
            throw new AppError("User doesn't exists", 401);
        }

        request.user = {
            id: userID,
        };

        next();
    } catch (error) {
        throw new AppError("Invalid token", 401);
    }
}
