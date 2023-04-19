import { inject, injectable } from "tsyringe";

import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string;
}

@injectable()
export class ListCarAvailableUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({ category_id, brand, name }: IRequest): Promise<Cars[]> {
        const car = await this.carsRepository.findAvailable(
            brand,
            category_id,
            name
        );
        return car;
    }
}
