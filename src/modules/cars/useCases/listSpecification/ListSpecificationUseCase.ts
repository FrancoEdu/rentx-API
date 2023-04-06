import { Specification  } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

export class ListSpecificationUseCase{
    constructor(private specificationRepository: ISpecificationRepository){}

    execute(): Specification[]{
        const list = this.specificationRepository.list()
        return list
    }
}