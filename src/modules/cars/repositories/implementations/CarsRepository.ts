import { Repository, getRepository } from "typeorm";

import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepository implements ICarsRepository {
    private repository: Repository<Cars>;

    constructor() {
        this.repository = getRepository(Cars);
    }

    async create({
        brand,
        category_id,
        daily_rate,
        fine_amount,
        license_plate,
        name,
    }: ICreateCarDTO): Promise<void> {
        const car = this.repository.create({
            brand,
            category_id,
            daily_rate,
            fine_amount,
            license_plate,
            name,
        });

        await this.repository.save(car);
    }

    async findByLicensePlate(license_plate: string): Promise<Cars> {
        const licensePlate = await this.repository.findOne({ license_plate });
        return licensePlate;
    }

    async findAvailable(
        brand?: string,
        category_id?: string,
        name?: string
    ): Promise<Cars[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true });

        if (brand) {
            carsQuery.andWhere("c.brand = :brand", { brand });
        }
        if (name) {
            carsQuery.andWhere("c.name = :name", { name });
        }
        if (category_id) {
            carsQuery.andWhere("c.category_id = :category_id", { category_id });
        }

        const cars = await carsQuery.getMany();
        return cars;
    }
}
