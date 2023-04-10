import { injectable, inject } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
export class ListSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute(): Promise<Specification[]> {
        const list = await this.specificationRepository.list();
        return list;
    }
}
