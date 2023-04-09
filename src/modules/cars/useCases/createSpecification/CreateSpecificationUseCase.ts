import { inject, injectable} from "tsyringe"
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { AppError } from "../../../../error/AppError";

export interface IRequest{
    name: string
    description: string
}

@injectable()
export class CreateSpecificationUseCase{
    constructor(
        @inject("SpecificationRepository")
        private specificationRepositories: ISpecificationRepository
    ){}

    async execute({name, description}: IRequest): Promise<void>{
        const specificationAlreadyExists = await this.specificationRepositories.findByName(name)

        if(specificationAlreadyExists){
            throw new AppError("Specification Already Exists !!", 401)
        }

        this.specificationRepositories.create({name,description})
    }
}