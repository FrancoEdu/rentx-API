import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

export class CreateSpecificationController{

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, description } = request.body
        const createSpeficicationUseCase = container.resolve(CreateSpecificationUseCase)
        createSpeficicationUseCase.execute({name,description})
        return response.status(201).json("Created ✅")
    }
}