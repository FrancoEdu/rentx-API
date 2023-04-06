import { Category } from "../model/Category";

export interface ICreateCategory{
    name: string
    description: string
}

export interface ICategoryRepository{
    findByName(name: string): Category
    list(): Category[]
    create({name, description}: ICreateCategory)
}