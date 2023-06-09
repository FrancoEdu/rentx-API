import { NextFunction, Request, Response } from "express";

import { AppError } from "../error/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByID(id);

    if (!user.isAdmin) {
        throw new AppError("User isn't admin");
    }

    return next();
}
