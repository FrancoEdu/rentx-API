import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController{
    
    constructor(private listCategoryUseCase: ListCategoryUseCase){}

    handle(request: Request, response: Response): Response{
        const list = this.listCategoryUseCase.execute()
        return response.status(201).json(list)
    }
}