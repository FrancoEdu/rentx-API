import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../error/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
    name: string;
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
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: IRequest): Promise<void> {
        const carsAlreadyExists = await this.carsRepository.findByLicensePlate(
            license_plate
        );

        if (carsAlreadyExists) {
            throw new AppError("Car already exists!!");
        }

        this.carsRepository.create({
            name,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });
    }
}
