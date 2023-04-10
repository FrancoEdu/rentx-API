import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export class ListSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationUseCase = container.resolve(
            ListSpecificationUseCase
        );
        const list = await listSpecificationUseCase.execute();
        return response.status(201).json(list);
    }
}
