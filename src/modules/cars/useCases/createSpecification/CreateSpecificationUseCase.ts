import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

export interface IRequest{
    name: string
    description: string
}

export class CreateSpecificationUseCase{
    constructor(private specificationRepositories: ISpecificationRepository){}

    execute({name, description}: IRequest): void{
        const specificationAlreadyExists = this.specificationRepositories.findByName(name)

        if(specificationAlreadyExists){
            throw new Error("Specification Already Exists !!")
        }

        this.specificationRepositories.create({name,description})
    }
}