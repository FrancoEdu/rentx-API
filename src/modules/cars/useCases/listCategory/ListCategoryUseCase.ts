import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class ListCategoryUseCase {
    constructor(
        @inject("CategoriesRepositories")
        private categoriesRepositories: ICategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepositories.list();
        return categories;
    }
}
