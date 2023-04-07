import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import {container} from "tsyringe"

export class ListSpecificationController{

    async handle(request: Request, response: Response): Promise<Response>{
        const listSpecificationUseCase = container.resolve(ListSpecificationUseCase)
        const list = await listSpecificationUseCase.execute()
        return response.status(201).json(list)
    }
}