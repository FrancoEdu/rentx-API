import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoryUseCase{
    constructor(private categoriesRepositories: ICategoryRepository){}

    execute(): Category[]{
        const categories = this.categoriesRepositories.list()
        return categories
    }
}