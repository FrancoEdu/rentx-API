import { inject,injectable } from "tsyringe"

import { ICategoryRepository } from "../../repositories/ICategoriesRepository"

export interface IRequest{
    name: string
    description: string
}

@injectable()
export class CreateCategoryUseCase{

    constructor(
        @inject("CategoriesRepositories")
        private categoriesRepositories: ICategoryRepository
    ){}

    async execute({name, description}:IRequest): Promise<void>{
        const categoryAlreadyExists = await this.categoriesRepositories.findByName(name)

        if(categoryAlreadyExists){
           throw new Error("Category already exists !!")
        }

        this.categoriesRepositories.create({name,description})
    }
}