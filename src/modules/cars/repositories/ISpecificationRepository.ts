import { Specification } from "../entities/Specification";

export interface ICreateSpecification{
    name: string
    description: string
}

export interface ISpecificationRepository{
    create({name, description}: ICreateSpecification): Promise<void>
    findByName(name: string): Promise<Specification>
    list(): Promise<Specification[]>
    
}