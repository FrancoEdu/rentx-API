import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository{
    
    car: Cars[] = []

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarDTO): Promise<Cars> {
        const cars = new Cars()

        Object.assign(cars, {
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        })

        this.car.push(cars)

        return cars;
    }

    async findByLicensePlate(license_plate: string): Promise<Cars>{
        return this.car.find((car) => car.license_plate === license_plate)
    }

}