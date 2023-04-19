import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarAvailableUseCase } from "./ListCarAvailableUseCase";

export class ListCarAvailableController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { category_id, brand, name } = request.query;

        const listAvailableCarsUseCase = container.resolve(
            ListCarAvailableUseCase
        );

        const cars = await listAvailableCarsUseCase.execute({
            brand: brand as string,
            name: name as string,
            category_id: category_id as string,
        });

        return response.json(cars);
    }
}
