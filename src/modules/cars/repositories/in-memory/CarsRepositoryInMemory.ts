import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository {
    car: Cars[] = [];

    async create({
        name,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarDTO): Promise<Cars> {
        const cars = new Cars();

        Object.assign(cars, {
            name,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        this.car.push(cars);
        return cars;
    }

    async findByLicensePlate(license_plate: string): Promise<Cars> {
        return this.car.find((car) => car.license_plate === license_plate);
    }

    async findAvailable(
        brand?: string,
        category_id?: string,
        name?: string
    ): Promise<Cars[]> {
        const all = this.car.filter((car) => {
            if (
                car.available === true ||
                (brand && car.brand === brand) ||
                (category_id && car.category_id === category_id) ||
                (name && car.name === name)
            ) {
                return car;
            }
            return null;
        });
        return all;
    }

    async findById(car_id: string): Promise<Cars> {
        return this.car.find((car) => car.id === car_id);
    }
}
