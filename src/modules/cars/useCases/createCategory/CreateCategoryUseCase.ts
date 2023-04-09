import { inject,injectable } from "tsyringe"
import { ICategoryRepository } from "../../repositories/ICategoriesRepository"
import { AppError } from "../../../../error/AppError"

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
           throw new AppError("Category already exists !!", 401)
        }

        this.categoriesRepositories.create({name,description})
    }
}