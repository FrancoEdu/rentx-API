import { AppError } from "../../../../error/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

export class CreateCarSpecificationUseCase {
    constructor(
        private carsRepository: ICarsRepository,
        private specificationsRepository: ISpecificationRepository
    ) {}
    async execute({ car_id, specifications_id }: IRequest): Promise<void> {
        const carExists = await this.carsRepository.findById(car_id);

        if (!carExists) {
            throw new AppError("Car didn't exists !");
        }

        const specification = await this.specificationsRepository.findById(
            specifications_id
        );

        carExists.specifications = specification;

        await this.carsRepository.create(carExists);
    }
}
