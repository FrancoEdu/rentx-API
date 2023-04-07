import { inject, injectable} from "tsyringe"
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

export interface IRequest{
    name: string
    description: string
}

@injectable()
export class CreateSpecificationUseCase{
    constructor(
        @inject("SpeficicationRepository")
        private specificationRepositories: ISpecificationRepository
    ){}

    async execute({name, description}: IRequest): Promise<void>{
        const specificationAlreadyExists = await this.specificationRepositories.findByName(name)

        if(specificationAlreadyExists){
            throw new Error("Specification Already Exists !!")
        }

        this.specificationRepositories.create({name,description})
    }
}