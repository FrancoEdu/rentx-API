import { Specification } from "../model/Specification";

export interface ICreateSpecification{
    name: string
    description: string
}

export interface ISpecificationRepository{
    create({name, description}: ICreateSpecification): void
    findByName(name: string): Specification
    list(): Specification[]
    
}