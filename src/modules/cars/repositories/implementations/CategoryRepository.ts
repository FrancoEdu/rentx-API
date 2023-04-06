import { Category } from "../../model/Category";
import { ICategoryRepository, ICreateCategory } from "../ICategoriesRepository";

export class CategoriesRepositories implements ICategoryRepository{
    
    private categories: Category[]

    private static INSTANCE: CategoriesRepositories

    private constructor(){
        this.categories = []
    }

    public static getInstance(): CategoriesRepositories{
        if(!CategoriesRepositories.INSTANCE){
            CategoriesRepositories.INSTANCE = new CategoriesRepositories()
        }

        return CategoriesRepositories.INSTANCE
    }

    create({name, description}: ICreateCategory){
        const category = new Category()

        Object.assign(category, {
            name, 
            description,
            created_at: new Date() 
        })

        this.categories.push(category)
    }

    list(): Category[]{
        return this.categories
    }

    findByName(name:string): Category{
        const category = this.categories.find((categ) => categ.name === name)
        return category
    }
}