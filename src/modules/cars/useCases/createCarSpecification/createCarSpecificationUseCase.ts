import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../error/AppError";
import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

@injectable()
export class CreateCarSpecificationUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository
    ) {}
    async execute({ car_id, specifications_id }: IRequest): Promise<Cars> {
        const carExists = await this.carsRepository.findById(car_id);

        if (!carExists) {
            throw new AppError("Car didn't exists !");
        }

        const specification = await this.specificationsRepository.findById(
            specifications_id
        );

        carExists.specifications = specification;

        await this.carsRepository.create(carExists);

        return carExists;
    }
}
