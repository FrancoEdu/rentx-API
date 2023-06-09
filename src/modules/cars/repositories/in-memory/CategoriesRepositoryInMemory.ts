import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategory } from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
    async list(): Promise<Category[]> {
        const list = this.categories;
        return list;
    }
    async create({ name, description }: ICreateCategory): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }
}
