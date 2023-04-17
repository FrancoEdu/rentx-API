import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../error/AppError";
import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

@injectable()
export class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: IRequest): Promise<Cars> {
        const carsAlreadyExists =
            this.carsRepository.findByLicensePlate(license_plate);

        if (carsAlreadyExists) {
            throw new AppError("Car already exists!!");
        }

        const car = await this.carsRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        return car;
    }
}
