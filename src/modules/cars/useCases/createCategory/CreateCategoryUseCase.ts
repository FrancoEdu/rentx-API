import { ICategoryRepository } from "../../repositories/ICategoriesRepository"

export interface IRequest{
    name: string
    description: string
}

export class CreateCategoryUseCase{

    constructor(private categoriesRepositories: ICategoryRepository){}

    execute({name, description}:IRequest): void{
        const categoryAlreadyExists = this.categoriesRepositories.findByName(name)

        if(categoryAlreadyExists){
           throw new Error("Category already exists !!")
        }

        this.categoriesRepositories.create({name,description})
    }
}